// tests/override-shell.integration.test.js

const OverrideShell = require('../src/override-shell');
const RedirectEngine = require('../src/redirect-engine');
const ClauseSimulator = require('../src/clause-simulator');

describe('Integration: OverrideShell + RedirectEngine + ClauseSimulator', () => {
  let shell;
  let engine;
  let simulator;

  beforeEach(() => {
    shell = new OverrideShell();
    engine = new RedirectEngine();
    simulator = new ClauseSimulator();
  });

  // Example: shell runs a command that triggers clause evaluation and redirect
  test('runs status command and returns ok', () => {
    const result = shell.run('status');
    expect(result).toBe('ok');
  });

  test('applies redirect when clause evaluates true', () => {
    const clause = { type: 'simple', value: true };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/dashboard' };

    const result = engine.apply(rule);
    expect(result).toBe('/dashboard');
  });

  test('blocks redirect when clause evaluates false', () => {
    const clause = { type: 'simple', value: false };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/dashboard' };

    const result = engine.apply(rule);
    expect(result).toBeNull();
  });

  test('shell can coordinate clause + redirect', () => {
    // Simulate a shell command that checks a clause and applies a redirect
    const clause = { type: 'or', clauses: [{ value: false }, { value: true }] };
    const condition = simulator.evaluate(clause);
    const rule = { type: 'conditional', condition, target: '/profile' };

    const redirect = engine.apply(rule);

    // In a real shell, this might be wrapped in shell.run('redirect')
    expect(redirect).toBe('/profile');
  });
});
