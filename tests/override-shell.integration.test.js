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

  // Basic shell command
  test('runs status command and returns ok', () => {
    const result = shell.run('status');
    expect(result).toBe('ok');
  });

  // Manual wiring: clause + redirect
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

  // AND clause integration
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

  // OR clause integration
  test('applies redirect if at least one clause is true', () => {
    const clause = { type: 'or', clauses: [{ value: false }, { value: true }] };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/profile' };
    const result = engine.apply(rule);
    expect(result).toBe('/profile');
  });

  test('blocks redirect if all clauses are false', () => {
    const clause = { type: 'or', clauses: [{ value: false }, { value: false }] };
    const rule = { type: 'conditional', condition: simulator.evaluate(clause), target: '/profile' };
    const result = engine.apply(rule);
    expect(result).toBeNull();
  });

  // Direct shell method: runRedirect()
  test('shell runRedirect applies when clause is true', () => {
    const clause = { type: 'simple', value: true };
    const result = shell.runRedirect(clause, '/dashboard');
    expect(result).toBe('/dashboard');
  });

  test('shell runRedirect blocks when clause is false', () => {
    const clause = { type: 'simple', value: false };
    const result = shell.runRedirect(clause, '/dashboard');
    expect(result).toBeNull();
  });

  test('shell runRedirect works with AND clause', () => {
    const clause = { type: 'and', clauses: [{ value: true }, { value: true }] };
    const result = shell.runRedirect(clause, '/settings');
    expect(result).toBe('/settings');
  });

  test('shell runRedirect works with OR clause', () => {
    const clause = { type: 'or', clauses: [{ value: false }, { value: true }] };
    const result = shell.runRedirect(clause, '/profile');
    expect(result).toBe('/profile');
  });
});
