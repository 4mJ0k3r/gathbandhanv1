<!-- BEGIN shared-agent-memory-project -->
## Project shared memory

This repo has project-local shared memory in `.shared-memory/`.

- Use project memory for repo-specific facts, TODOs, decisions, and handoffs.
- Use global memory only for user-wide preferences or cross-project context.
- Never store API keys, tokens, passwords, cookies, private keys, `.env` values, authorization headers, or credential-bearing URLs. Save only environment-variable names or `[REDACTED]`, and never edit `memory.json` directly.
- Use the project activity board for edit coordination:
  - `shared-agent-memory claim <files> --as codex --note "<task>"`
  - `shared-agent-memory board`
  - `shared-agent-memory release --as codex`
- If your AI tool does not automatically read this file, ask it to read `.shared-memory/INSTRUCTIONS.md` before working in this repo.
<!-- END shared-agent-memory-project -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
