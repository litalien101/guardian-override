// tests/override-shell.test.js

// Import the module under test
const OverrideShell = require('../src/override-shell');

describe('OverrideShell', () => {
  // Setup and teardown hooks
  beforeAll(() => {
    // Runs once before all tests
  });

  beforeEach(() => {
    // Runs before each test
  });

  afterEach(() => {
    // Runs after each test
  });

  afterAll(() => {
    // Runs once after all tests
  });

  // Tests for creating and initializing the shell
  describe('Initialization', () => {
    test('creates a new instance', () => {
      const shell = new OverrideShell();
      expect(shell).toBeDefined();
    });

    test('loads default configuration', () => {
      const shell = new OverrideShell();
      expect(shell.getConfig()).toEqual(expect.any(Object));
    });
  });

  // Tests for executing commands
  describe('Command execution', () => {
    test('runs a valid command', () => {
      const shell = new OverrideShell();
      const result = shell.run('status');
      expect(result).toBe('ok');
    });

    test('handles unknown command', () => {
      const shell = new OverrideShell();
      expect(() => shell.run('unknown')).toThrow();
    });
  });

  // Tests for error handling
  describe('Error handling', () => {
    test('throws on invalid input', () => {
      const shell = new OverrideShell();
      expect(() => shell.run(null)).toThrow();
    });
  });
});
