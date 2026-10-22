# Architecture Editorial

Practice project: a single-page editorial website for a fictional architecture agency. All names, projects, people and numbers are placeholders and must never be presented as real.

## Run

```bash
npm install
npm run dev      # dev server, http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Stack

React 19, Vite, Framer Motion, plain CSS driven by design tokens. JavaScript only. Nothing else is added without a stated reason.

## Language and direction

English only, LTR (`<html lang="en" dir="ltr">`). There is no Persian or RTL version of this project. This overrides the team default and is logged in design DNA Overrides.

## Local only

The project lives on this computer. No GitHub, no Vercel, no remote, no deployment. The final handoff is these run instructions plus a production build checked locally.

## Secrets

Never commit secrets. There are none today. If one is ever needed, keep it in an untracked `.env` file (already git-ignored), never in source files or docs.

## Structure

```
src/styles               tokens.css, globals.css
src/components/ui        base components
src/components/custom    project components
src/sections            one file per page section
src/content/en          all copy (components read text from here)
public                  static assets
design/mockups          approved mockups
design/qa               QA screenshots and reports
docs                    brief, research, UX, design system, motion docs
```

Image credits (photographer, source URL, license) go in `docs/IMAGE_CREDITS.md`.
