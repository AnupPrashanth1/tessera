# Contributing to Tessera

Thank you for helping build Tessera. This repository is intended to grow into a production-grade
engineering project, so contributions should be focused, reviewed, and easy to maintain.

## Branching

The default branch is `main`.

Use short, descriptive branch names:

- `feature/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`
- `experiment/<short-description>`

## Commits

Use concise commit messages that describe the intent of the change.

Recommended format:

```text
type: short summary
```

Examples:

```text
feat: add risk scoring service contract
fix: correct graph query pagination
docs: document authentication architecture
chore: update lint configuration
```

## Pull Requests

Before opening a pull request:

- Keep the scope focused.
- Update documentation when behavior, architecture, or setup changes.
- Run formatting and linting checks.
- Include screenshots for UI changes when applicable.
- Note security, privacy, or data-handling implications.

## Local Checks

Use the root workspace commands:

```bash
pnpm format:check
pnpm lint
```

Python checks are handled through Ruff:

```bash
pnpm lint:python
```

## Security and Data Handling

Do not commit secrets, credentials, private keys, tokens, real customer data, financial account
data, personally identifiable information, or production incident data.

Use synthetic or anonymized data for demos, tests, and development.

## Code Review Standards

Reviewers should check for:

- Correctness and maintainability.
- Clear boundaries between frontend, backend, data, and infrastructure.
- Security and privacy implications.
- Tests or validation appropriate to the change.
- Documentation updates for new workflows or architecture.

## Project Direction

Tessera combines cybersecurity, fraud detection, financial intelligence, AI agents, and knowledge
graphs. Contributions should preserve that product direction and avoid adding unrelated
functionality.
