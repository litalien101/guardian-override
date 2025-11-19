// src/override-shell.js

class OverrideShell {
  constructor() {
    // Default configuration object
    this.config = {
      mode: 'default',
      version: '0.1.0'
    };
  }

  // Return the current configuration
  getConfig() {
    return this.config;
  }

  // Run a command string
  run(command) {
    if (!command || typeof command !== 'string') {
      throw new Error('Invalid command input');
    }

    // Handle known commands
    if (command === 'status') {
      return 'ok';
    }

    // Unknown commands throw an error
    throw new Error(`Unknown command: ${command}`);
  }
}

module.exports = OverrideShell;
