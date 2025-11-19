# Contributing to Guardian Override

Thank you for helping build Guardian Override.  
This project exists to protect families from burnout and emotional manipulation, so every contribution matters.

---

## How to contribute

- **Fork the repo** and create your branch from `main`.
- **Make changes** in plain, clear language and code.
- **Run linting** (`npm run lint`) before submitting.
- **Open a pull request (PR)** with a clear description of what you changed and why.

---

## Coding standards

- Use **TypeScript** for all new code.
- Keep code **modular and readable** - small functions, clear names.
- Avoid jargon in comments and documentation.
- Run `npm run lint` to check style before committing.
- Place source files in `src/` and compiled output in `dist/`.

---

## Pull request workflow

1. **Branch naming:**  
   - `fix/...` for bug fixes  
   - `feat/...` for new features  
   - `docs/...` for documentation updates  

2. **Commit messages:**  
   - Use short, descriptive messages.  
   - Example: `feat: add stretch-break redirect type`.

3. **PR description:**  
   - Explain what changed.  
   - Link to related issues if applicable.  
   - Note any breaking changes.

---

## Versioning strategy

Guardian Override follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (`X.0.0`) → Breaking changes (e.g., incompatible schema updates).
- **MINOR** (`0.X.0`) → Backwards-compatible new features.
- **PATCH** (`0.0.X`) → Bug fixes, small improvements, documentation updates.

Before publishing:
- Update `CHANGELOG.md` with your changes.
- Run `npm version patch|minor|major` to bump the version.
- Push tags so the release is traceable.

---

## Release checklist

Before publishing a new release:

1. **Update Changelog**  
   - Add a new section in `CHANGELOG.md` using the release template.  
   - Document changes under *Added, Changed, Fixed, Removed*.  

2. **Bump Version**  
   - Run `npm version patch` for bug fixes.  
   - Run `npm version minor` for new features.  
   - Run `npm version major` for breaking changes.  

3. **Build Outputs**  
   - Run `npm run build` to generate both CommonJS (`dist/cjs`) and ES Module (`dist/esm`) builds.  
   - Verify that type declarations (`.d.ts`) are generated.  

4. **Test**  
   - Run `npm test` (or manual checks if tests aren’t defined yet).  
   - Ensure both CJS and ESM builds run correctly.  

5. **Lint & Clean**  
   - Run `npm run lint` to check code style.  
   - Run `npm run clean` if needed before rebuilding.  

6. **Commit & Tag**  
   - Commit updated files (`CHANGELOG.md`, `package.json`, build outputs).  
   - Push Git tags created by `npm version`.  

7. **Publish**  
   - Run `npm publish` (defaults to public access per `publishConfig`).  
   - Verify package contents (`files` field ensures only `dist/`, `README.md`, and `LICENSE.md` are included).  

---

## Community values

- **Dignity-first:** Respect contributors and families in all interactions.  
- **Transparency:** Document decisions and changes openly.  
- **Accessibility:** Write in plain language so anyone can understand.  
- **Safety:** Prioritize emotional and technical safety in every contribution.  

---

## Questions?

If you’re unsure about something, open a draft PR or start a discussion.  
We’d rather collaborate early than fix confusion later.
