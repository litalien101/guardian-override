// src/redirect-engine.js

class RedirectEngine {
  constructor() {
    // Default rules for initialization
    this.rules = [
      { type: 'simple', target: '/home' },
      { type: 'conditional', condition: true, target: '/dashboard' }
    ];
  }

  // Return all rules
  getRules() {
    return this.rules;
  }

  // Apply a redirect rule
  apply(rule) {
    if (!rule || typeof rule !== 'object') {
      throw new Error('Invalid rule input');
    }

    if (rule.type === 'simple') {
      return rule.target;
    }

    if (rule.type === 'conditional') {
      return rule.condition ? rule.target : null;
    }

    throw new Error(`Unsupported rule type: ${rule.type}`);
  }
}

module.exports = RedirectEngine;
