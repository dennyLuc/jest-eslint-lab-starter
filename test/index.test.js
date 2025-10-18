const { capitalizeWords, filterActiveUsers, logAction } = require('../index');


// Tests for capitalizeWords function
describe('capitalizeWords', () => {
  test('should capitalize each word in a normal sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('should return an empty string when input is empty', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('should handle strings with special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-World');
  });

  test('should capitalize a single-word string', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });
});

// Tests for filterActiveUsers function
describe('filterActiveUsers', () => {
  test('should filter active users from an array', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true }
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Charlie', isActive: true }
    ]);
  });

  test('should return an empty array if all users are inactive', () => {
    const users = [
      { name: 'Alice', isActive: false },
      { name: 'Bob', isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test('should return an empty array if input array is empty', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

// Tests for logAction function
describe('logAction', () => {
  test('should generate correct log string for valid inputs', () => {
    const action = 'login';
    const username = 'Alice';
    const logMessage = logAction(action, username);
    expect(logMessage).toMatch(new RegExp(`User ${username} performed ${action} at \\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z`));
  });

  test('should handle missing action or username', () => {
    const logMessage = logAction('', '');
    expect(logMessage).toMatch(new RegExp(`User  performed  at \\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z`));
  });

  test('should handle empty strings as inputs', () => {
    const logMessage = logAction('', '');
    expect(logMessage).toMatch(new RegExp(`User  performed  at \\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z`));
  });
});
