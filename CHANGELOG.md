# Changelog

All notable changes to this project will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/).

---

## [Unreleased]
- Placeholder for upcoming changes.  
- Use sections below (*Added, Changed, Fixed, Removed*) when preparing the next release.

---

## [0.1.0] - 2025-11-18
### Added
- Initial project setup with dual TypeScript build (CommonJS + ES Modules).
- Core documentation files:
  - `README.md` - project overview
  - `LICENSE.md` - MIT license with plain-language summary
  - `MVP_PLAN.md` - minimum viable product plan
  - `ONBOARDING_GUIDE.md` - contributor onboarding guide
  - `ROADMAP.md` - forward-looking development roadmap
  - `SECURITY.md` - security policy and vulnerability reporting process
- Starter `package.json` with scripts, dependencies, and dual entry points.
- Base `tsconfig.json` plus `tsconfig.cjs.json` and `tsconfig.esm.json` for dual builds.
- Initial simulator scaffolding and repo structure.

### Changed
- Refined project description to emphasize dignity-first boundaries and emotional governance.
- Improved onboarding and governance docs for clarity and accessibility.

### Fixed
- Removed jargon and artificial language from community-facing documentation.
- Corrected inconsistencies in repo structure and contributor workflow notes.

### Removed
- Placeholder boilerplate files from early drafts.

---

## Versioning Strategy

- **MAJOR** (`X.0.0`) -> Breaking changes (e.g., incompatible schema updates).
- **MINOR** (`0.X.0`) -> Backwards-compatible new features (e.g., new redirect types).
- **PATCH** (`0.0.X`) -> Bug fixes, small improvements, documentation updates.

Before publishing:
- Update this file with your changes.
- Run `npm version patch|minor|major` to bump the version.
- Push tags so the release is traceable.

---

## Release Checklist

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

## Release template snippet

```
## [X.Y.Z] - YYYY-MM-DD
### Added
- New features introduced in this release.

### Changed
- Updates to existing functionality, workflows, or documentation.

### Fixed
- Bugs or issues resolved.

### Removed
- Features or files removed.
```

**Example in practice**
```
## [0.2.0] - 2025-12-01
### Added
- New redirect type: “stretch break” reminder.
- Weekly summary export for family logs.

### Changed
- Improved onboarding guide with clearer examples.
- Updated simulator UI for readability.

### Fixed
- Crash when loading multiple rules in simulator.
- Typo in ROADMAP.md.

### Removed
- Deprecated placeholder module from early prototype.
```
