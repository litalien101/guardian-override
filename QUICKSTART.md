# Contributor Quickstart

Welcome to Guardian Override!  
This guide gives you the essentials to start contributing right away.

---

## Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/litalien101/guardian-override.git
   cd guardian-override

2. **Install dependencies**

```
npm install
```

3. **Run in dev mode**

```
npm run dev
```

---

## Workflow
**Branching:**

- `feat/...` -> new features

- `fix/...` -> bug fixes

- `docs/...` -> documentation updates

**Commit messages:** Keep them short and clear. 
**Example:** `feat: add stretch-break redirect type`

**Pull requests:**

- Explain what changed and why.

- Link issues if relevant.

- Note breaking changes.

---

## Coding standards

- Use **TypeScript** for all new code.

- Keep functions small and readable.

- Run `npm run lint` before committing.

---

## Build & Test

- Build both targets:

```
npm run build
```
- Rune tests (or manual checks)

```
npm test
```

---

## Release (summary)

1. Update `CHANGELOG.md` with your changes.

2. Bump version:
```
npm version patch|minor|major
```

3. Build outputs:
```
npm run build
```

4. Publish:
```
npm publish
```

---

## Values

- **Dignity-first:** Respect families and contributors.

- **Transparency:** Document openly.

- **Accessibility:** Write in plain language.

- **Safety:** Prioritize emotional and technical safety.

---

That’s it - you’re ready to contribute!
