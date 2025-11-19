// tests/integration.test.js

const RedirectEngine = require('../src/redirect-engine');
const ClauseSimulator = require('../src/clause-simulator');

describe('Integration: RedirectEngine + ClauseSimulator', () => {
  let engine;
  let simulator;

  beforeEach(() => {
    // Fresh instances before each test
    engine = new RedirectEngine();
    simulator = new ClauseSimulator();
  });

  // Test that a conditional redirect depends on clause evaluation
  test('applies redirect when clause evaluates true', () => {
    const clause = { type: 'simple', value: true };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/dashboard' };

    const result = engine.apply(rule);
    expect(result).toBe('/dashboard');
  });

  test('does not apply redirect when clause evaluates false', () => {
    const clause = { type: 'simple', value: false };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/dashboard' };

    const result = engine.apply(rule);
    expect(result).toBeNull();
  });

  // Test combining multiple clauses with AND
  test('applies redirect only if all clauses are true', () => {
    const clause = { type: 'and', clauses: [{ value: true }, { value: true }] };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/settings' };

    const result = engine.apply(rule);
    expect(result).toBe('/settings');
  });

  test('blocks redirect if any clause is false', () => {
    const clause = { type: 'and', clauses: [{ value: true }, { value: false }] };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/settings' };

    const result = engine.apply(rule);
    expect(result).toBeNull();
  });
});
