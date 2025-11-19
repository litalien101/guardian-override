// src/override-shell.js

const RedirectEngine = require('./redirect-engine');
const ClauseSimulator = require('./clause-simulator');

class OverrideShell {
  constructor() {
    // Default configuration object
    this.config = {
      mode: 'default',
      version: '0.1.0'
    };

    // Internal instances of engine and simulator
    this.engine = new RedirectEngine();
    this.simulator = new ClauseSimulator();
  }

  // Return the current configuration
  getConfig() {
    return this.config;
  }

  // Run a basic shell command
  run(command) {
    if (!command || typeof command !== 'string') {
      throw new Error('Invalid command input');
    }

    if (command === 'status') {
      return 'ok';
    }

    throw new Error(`Unknown command: ${command}`);
  }

  /**
   * runRedirect(clause, target)
   * ---------------------------
   * Evaluates a clause using ClauseSimulator.
   * Applies a conditional redirect using RedirectEngine.
   * Returns the redirect target if condition is true, otherwise null.
   */
  runRedirect(clause, target) {
    if (!clause || !target || typeof target !== 'string') {
      throw new Error('Invalid redirect input');
    }

    const condition = this.simulator.evaluate(clause);
    const rule = { type: 'conditional', condition, target };
    return this.engine.apply(rule);
  }
}

module.exports = OverrideShell;
