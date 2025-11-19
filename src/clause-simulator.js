// src/clause-simulator.js

class ClauseSimulator {
  constructor() {
    // Default clauses for initialization
    this.clauses = [
      { type: 'simple', value: true },
      { type: 'simple', value: false }
    ];
  }

  // Return all clauses
  getClauses() {
    return this.clauses;
  }

  // Evaluate a clause
  evaluate(clause) {
    if (!clause || typeof clause !== 'object') {
      throw new Error('Invalid clause input');
    }

    if (clause.type === 'simple') {
      return !!clause.value;
    }

    if (clause.type === 'and' && Array.isArray(clause.clauses)) {
      return clause.clauses.every(c => this.evaluate(c));
    }

    if (clause.type === 'or' && Array.isArray(clause.clauses)) {
      return clause.clauses.some(c => this.evaluate(c));
    }

    throw new Error(`Unsupported clause type: ${clause.type}`);
  }
}

module.exports = ClauseSimulator;
