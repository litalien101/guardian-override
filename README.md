# Guardian Override
![Run Tests](https://github.com/<litalien101>/<guardian-override>/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/<litalien101>/<guardian-override>/branch/main/graph/badge.svg)](https://codecov.io/gh/<litalien101>/<guardian-override>)

Helping families set healthy screen boundaries - with dignity, not surveillance.

---

## Vision

Guardian Override is an emotional governance layer for families. It creates gentle, transparent screen boundaries that protect trust, reduce burnout, and encourage autonomy. It’s not about control, it’s about making healthier choices easier and more collaborative.

---

## Principles

- **Dignity-first:** No hidden monitoring or punishments. Boundaries are transparent, and consent matters.
- **Gentle redirects:** Nudges and guide rails, not locks. Help steer attention back to balance.
- **Collaborative setup:** Guardians and kids co-create boundaries and review logs together.
- **Plain language:** Rules, settings, and messages are understandable by everyone.
- **Ethical defaults:** Guardian Override is explicitly not a parental control app.

---

## What this is

- **Purpose:** A prototype toolkit that sets screen boundaries through redirects, reminders, and shared journaling.
- **Approach:** Preview rules before applying, log every redirect, and use those logs for honest family conversations.
- **Outcome:** Less stress. More clarity. Healthy habits that feel fair and respectful.

---

## Architecture overview

- **Simulator:** Preview engine to test redirect rules and scenarios before they go live.
- **Schemas and clauses:** Draft JSON structures for policies, triggers, and actions.
- **Chrome extension:** Early browser-based prototype to apply redirects in real time.
- **Android skeleton:** Initial mobile foundation for extending the same principles beyond the browser.
- **Journal:** Logging for every redirect, enabling review and family discussion.
- **SDK and CLI packages:** Early developer tools for building, testing, and integrating modules.

---

## What’s in this repository

- **Docs:** Ethics, design principles, governance, onboarding, roadmap, and MVP planning.
- **Packages:** Early scaffolding for SDK/CLI as integration points.
- **Public landing:** Initial index.html for a simple explainer and future onboarding flow.
- **Tests:** Basic checks and mockups to validate assumptions and rule behavior.
- **iOS placeholder:** Reserved for parity once Android and web stabilize.

---

## How it works

1. **Set boundaries:** Define rules like “After 30 minutes of scrolling, suggest a break.”
2. **Preview safely:** Use the simulator to see how rules apply before turning them on.
3. **Redirect gently:** When a boundary is reached, nudge with context—never shame or punish.
4. **Review together:** Every redirect is logged. Families can discuss patterns and adjust.

---

**Example rule:**

```json
{
  "rule": "scrolling_break",
  "trigger": "30_minutes",
  "action": "suggest_break",
  "message": "Time to stretch!"
}
```

---

## Quick start (prototype)
```
bash
git clone https://github.com/litalien101/guardian-override.git
npm install
npm start
```
This launches the early simulator for testing rule behaviors and user flows

---
## Current status
- Early prototype:
Foundational scaffolds and draft schemas; many modules are not production-ready.

- No public release:
Focused on simulator, rule definitions, and consent-driven UX before pilots.

- Cross-platform vision:
Web first, with Android and iOS staged for parity.

--- 

## Roadmap

- Phase 1:
Strengthen simulator, schemas, and clauses.

- Phase 2:
Connect Chrome extension and Android app to simulator.

- Phase 3:
Build journaling and review experience for families.

- Phase 4:
Usability, accessibility, and expanded redirects; prepare for pilot testing.

---

## Contributing

- Start here: Read the Code of Conduct, Contribution Guide, and Onboarding Guide.

- Design values: Keep dignity, consent, and clarity at the center.

- Dev approach: Small, testable modules. Document assumptions. Prefer transparent defaults.

- Feedback: Propose rule schemas, simulator scenarios, and UX copy that fosters trust.

---

## Governance and equity

- Governance: 
Templates provided to align ethical decisions, consent flows, and community participation.

- Equity and profit sharing: Draft structures for fair collaboration and transparent rewards.

- Security and safety: Security policy outlines expectations for data handling and boundary integrity.

---

## License
MIT License — open for responsible use and collaboration.

---

## A note on tone and promise
Guardian Override is built for families who want healthier digital lives without sacrificing dignity. The promise isn’t perfect control, it’s better conversations, gentle boundaries, and more trust. If you care about protecting attention and relationships, you’re in the right place.

