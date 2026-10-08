# CLAUDE.md

Project guidelines for Claude Code sessions on the Hertzworkz frontend.

## 1. Git Workflow (strict)

- **NEVER commit or push to `main`, under any circumstance.** This includes force pushes, merges into `main`, and amending commits on `main`.
- **All active development targets the `V2` branch** (the remote branch is named `v2`; use that exact name with git).
- Create feature branches from `v2` (e.g. `feature/<name>`, `fix/<name>`) and push only those branches or `v2`.
- Open PRs against `v2`, never `main`.
- Before any commit or push, run `git branch --show-current`. If it prints `main`, stop and switch branches first.
- Do not rewrite shared history (no force push) unless explicitly told to.

## 2. Tech Stack

- React 18 + Vite + Tailwind CSS 3, with React Router.
- `.jsx` files and **plain JavaScript only. No TypeScript** (no `.ts`/`.tsx`, no type annotations).
- ESLint is the linter (`eslint.config.js`). Follow its rules in code you write.

## 3. UI & Styling

- **Mobile-first** responsive design: base styles for mobile, then `sm:`/`md:`/`lg:` for larger screens.
- Use **semantic HTML** (`header`, `nav`, `main`, `section`, `button`, etc.), not `div` for everything.
- **Accessibility (a11y):** meaningful `alt` text, labels for inputs, keyboard focus and operability, sufficient contrast, ARIA only when native semantics are not enough.
- Use **Tailwind theme tokens** from `tailwind.config.js` (colors, fonts, spacing). No arbitrary hardcoded values (`w-[437px]`, `#a1b2c3`) unless the value comes from the Figma design.

## 4. Code Quality

- Keep diffs **minimal** and focused on the task.
- **Do not reformat untouched files** or fix unrelated lint issues in the same change.
- **No new dependencies** without explicit permission. Respect `package-lock.json`; do not upgrade packages.
- Verify every change with `npm run lint` and `npm run build`.
  - Baseline: lint already reports pre-existing errors. Make sure your change adds none; the build must pass.
- Do not commit `node_modules`, `dist`, or `*.local` files (see `.gitignore`).

## 5. Local Environment

- Dev server: `npm run dev` (http://localhost:5173).
- If `NODE_ENV=production` is set on the machine, npm skips devDependencies. Set `NODE_ENV=development` for the session before `npm install`.
