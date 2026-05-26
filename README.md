# Kalax524 Blog

Hexo + Butterfly source for [kalax524.com](https://kalax524.com).

## Local Workflow

```bash
npm run sync:notes
npm run build
npm run server
```

`npm run sync:notes` reads Markdown from `D:\obsidian\11` and generates public blog copies under `source/_posts/obsidian`. It does not edit the Obsidian vault.

## Daily English

Daily English posts live in `source/_posts/english-reading`, with the index page at `source/english-reading/index.md`.

Use this to create a structured original reading note for a date:

```bash
npm run new:reading -- --date=2026-05-27
```

Published reading posts should use original, public-domain, or open-licensed text. Do not copy full articles from copyrighted books.

## Deployment

The source branch is `source`. Hexo deploys generated static files to `KalaxYU/KalaxYU.github.io` on `main`:

```bash
npm run deploy
```

The deploy URL intentionally does not include a personal access token. Use Git Credential Manager, SSH, or GitHub Actions secrets for authentication.
