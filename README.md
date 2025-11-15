Guardian Override
Helping families set healthy screen boundaries—with dignity, not surveillance

---

Overview
Guardian Override is a prototype toolkit for families who want healthier digital habits without heavy‑handed controls. Instead of locking apps or spying on activity, it uses gentle redirects and transparent boundaries to encourage balance and independence.

Think of it as a guide rail: it doesn’t block the path, but it helps steer everyone back on track when screens start to take over.

---

Why It Matters
- Respect first: Children and teens deserve dignity. No hidden monitoring, no punishment.  
- Healthy habits: Nudges and reminders reduce stress and encourage balance.  
- Family focus: Boundaries can be set across devices, collaboratively.  
- Transparency: Every redirect is logged so families can review and discuss together.  
- Ethics: Guardian Override is not a parental control app—it’s a trust‑based toolkit.

---

What’s Inside
This repo is a scaffold—a foundation for building a multi‑platform system. Current modules include:

- Docs: Notes on ethics, design, and system principles.  
- Chrome extension: Early prototype for browser‑based redirects.  
- Android skeleton: Initial mobile app structure (Kotlin).  
- Simulator: Preview engine to test redirect rules before applying them.  
- Schemas & clauses: Draft JSON structures for rules and boundaries.  
- SDK & CLI packages: Early developer tools.  
- Tests: Basic checks and mockups to validate functionality.  

Example rule schema:  
`json
{
  "rule": "scrolling_break",
  "trigger": "30_minutes",
  "action": "suggest_break",
  "message": "Time to stretch!"
}
`

---

How It Works
1. Set boundaries: Guardians define redirect rules (e.g., “After 30 minutes of scrolling, suggest a break”).  
2. Preview: The simulator shows how rules would apply in real scenarios.  
3. Redirect: When a boundary is reached, the system nudges the user with a reminder or alternative activity.  
4. Journal: Every redirect is logged for family review and discussion.  

---

Current Status
- Early prototype—many modules are placeholders.  
- No public releases yet.  
- Foundation for a multi‑platform system.  

---

Roadmap
- Phase 1: Build out simulator and schemas.  
- Phase 2: Connect Chrome extension + Android app to simulator.  
- Phase 3: Add logging/journaling for family review.  
- Phase 4: Improve usability, expand redirect options, prepare for pilot testing.  

---

Contributing
We welcome ideas, feedback, and contributions.  

Quick start for developers:  
`bash
git clone https://github.com/your-org/guardian-override.git
cd guardian-override
npm install
npm start   # launches the simulator
`

See also:  
- Code of Conduct  
- Contributing Guide  
- Security Policy  

---

📜 License
Licensed under the MIT License.
