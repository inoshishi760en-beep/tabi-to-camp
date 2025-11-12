# Repository Guidelines

## Project Structure & Module Organization
- `src/` — application code organized by feature (e.g., `src/auth/`, `src/api/`, `src/ui/`). Keep small, cohesive modules; prefer index entrypoints (e.g., `src/index.ts` or `src/main.py`).
- `tests/` — mirrors `src/` structure (e.g., `tests/auth/` for `src/auth/`).
- `assets/` — static files (images, fonts). Keep large media outside of Git when possible.
- `scripts/` — repeatable dev/CI utilities (shell/Node/Python scripts).
- `docs/` — architecture notes, decisions, and runbooks.

## Build, Test, and Development Commands
- `make setup` — install dependencies (e.g., `npm ci` or `poetry install`).
- `make dev` — start local development (watch/hot reload).
- `make build` — production build or package artifact.
- `make test` — run unit tests with coverage.
- `make lint` — run lint and format checks.
If no Makefile, use the underlying toolchain directly (examples): `npm run dev`, `npm test`, `pytest -q`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for JS/TS; 4 spaces for Python.
- Filenames: `kebab-case` for scripts/config; `PascalCase` for React components; `snake_case` for Python modules.
- Tests: `name.test.ts` or `test_name.py` adjacent in `tests/`.
- Preferred tools: Prettier + ESLint (TS/JS); Black + isort + Flake8 (Python). Enforce types where available.

## Testing Guidelines
- Place tests in `tests/` mirroring `src/` packages.
- Aim for ≥80% line coverage; prioritize critical paths and error handling.
- Fast, deterministic tests only; mock external services.
- Commands: `make test` or `npm test` / `pytest -q`. Generate coverage with `npm test -- --coverage` or `pytest --cov`.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `build:`, `ci:`, `chore:`; include scope when helpful, e.g., `feat(auth): add token refresh`.
- Keep subjects ≤72 chars; body explains what & why; reference issues (`Closes #123`).
- PRs: clear description, screenshots/logs for UX or DX changes, linked issue, tests/docs updated, note breaking changes in a “Changes” section.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` for dev; provide `.env.example` with placeholders.
- Document required environment variables in `README.md` and avoid hardcoding configuration.
- Regularly run dependency audits (`npm audit` or `pip-audit`).

## Agent-Specific Instructions
- Keep changes minimal, focused, and consistent with existing patterns.
- Update tests/docs alongside code; avoid introducing new stacks without discussion.
- Prefer small patches; explain assumptions and next steps in PRs.

