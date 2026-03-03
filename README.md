# northharbor.dev — Website

The NorthHarbor organization website and Rising Tides engineering blog, built with Hugo and deployed to Netlify.

**Live site:** [northharbor.dev](https://northharbor.dev)

---

## What's Here

| Path | Purpose |
|------|---------|
| `content/` | All site content as Markdown |
| `content/blog/` | Rising Tides blog posts |
| `content/products/` | Products section |
| `layouts/` | Hugo HTML templates |
| `assets/css/main.css` | Brand-consistent CSS (tokens from `brand/design-language/colors.md`) |
| `static/images/` | Org banner, avatar, product imagery |
| `scripts/new-post.sh` | Scaffold a new blog draft |
| `scripts/publish.js` | Cross-post to Substack / LinkedIn |
| `config.toml` | Hugo site configuration |
| `netlify.toml` | Netlify build configuration |

---

## Local Development

### Prerequisites

- Hugo extended v0.121.0+: `brew install hugo`
- Node.js 20+ (for publish script only)

### Run

```bash
hugo server -D
```

Site available at `http://localhost:1313`

The `-D` flag includes draft posts.

---

## Writing a Blog Post

```bash
./scripts/new-post.sh "Your Post Title"
```

This creates `content/blog/your-post-title.md` with frontmatter pre-filled. Edit the file, set `draft: false` when ready, then push to main — Netlify auto-deploys.

### Frontmatter

```yaml
---
title: "Your Post Title"
date: 2026-03-03
draft: false
tags: [ai-agents, engineering, waypoint]
summary: "One sentence summary for previews and cross-posting."
---
```

---

## Publishing / Cross-Posting

Once a post is pushed and live:

```bash
npm install
node scripts/publish.js --post your-post-title.md --targets substack,linkedin
```

Required environment variables (copy `.env.example` to `.env`):

```
SUBSTACK_API_KEY=
SUBSTACK_PUBLICATION_URL=
LINKEDIN_ACCESS_TOKEN=
```

---

## Brand Consistency

CSS tokens are sourced from [`brand/design-language/colors.md`](https://github.com/northharbor-dev/brand/blob/main/design-language/colors.md).
Voice and copy follow [`brand/voice-and-tone/`](https://github.com/northharbor-dev/brand/tree/main/voice-and-tone).

When [`design-system/tokens/tailwind-preset.js`](https://github.com/northharbor-dev/design-system/blob/main/tokens/tailwind-preset.js) is finalized, migrate `assets/css/main.css` token values to import from that preset.

---

## Deployment

Push to `main` → Netlify auto-deploys via `hugo --minify`. Hugo version pinned to `0.121.0` in `netlify.toml`.
