# Rising Tides

**Engineering blog by Bob Hong / NorthHarbor Dev**

A blog about building AI-augmented software development systems — covering agent coordination, multi-agent orchestration, enterprise architecture, and the journey of building Waypoint, Pilot, and Breezy.

---

## Blog Identity

- **Name:** Rising Tides
- **Author:** Bob Hong
- **Organization:** [NorthHarbor Dev](https://github.com/northharbor-dev)
- **Tagline:** *Thoughts on AI-first engineering, agent coordination, and building the future of software development.*

---

## Hosting & Publishing Stack

| Layer | Tool |
|---|---|
| Hosting | Netlify (static site) |
| Domain | northharbor.dev (or northharbordev.com) |
| Framework | Hugo (recommended) or Next.js static export |
| Content format | Markdown (`.md`) |
| Primary distribution | Blog on northharbor.dev |
| Cross-posting targets | Substack, LinkedIn, dev.to |
| Cross-posting method | Node.js script (see `/scripts/publish.js`) |
| Draft management | Private GitHub repo (this repo) |

---

## Repo Structure

```
rising-tides/
├── README.md                    # This file
├── .env.example                 # API keys template (never commit .env)
├── content/
│   ├── drafts/                  # Work in progress — never auto-published
│   └── published/               # Final approved posts, ready to deploy
├── scripts/
│   ├── publish.js               # Cross-posting script
│   └── new-post.sh              # Helper to scaffold a new draft
├── site/                        # Static site generator config & templates
│   └── config.toml              # Hugo config
└── netlify.toml                 # Netlify build config
```

---

## Workflow

1. **Draft** — Create a new Markdown file in `content/drafts/` using `./scripts/new-post.sh "Post Title"`
2. **Write** — Use Claude or Cursor to help draft, then edit and finalize
3. **Review** — Move file to `content/published/` when approved
4. **Deploy** — Push to main branch; Netlify auto-deploys
5. **Cross-post** — Run `node scripts/publish.js --post <filename>` to push to Substack and other targets

---

## Post Frontmatter Format

Each Markdown post should include frontmatter:

```markdown
---
title: "Your Post Title"
date: 2026-03-01
tags: [ai-agents, engineering, waypoint]
summary: "One sentence summary for previews and cross-posting."
status: draft # or published
---

Your content here...
```

---

## Cross-Posting Script

**Usage:**
```bash
node scripts/publish.js --post my-post-title.md --targets substack,linkedin
```

**Environment variables required:**
```
SUBSTACK_API_KEY=
SUBSTACK_PUBLICATION_URL=
DEVTO_API_KEY=
LINKEDIN_ACCESS_TOKEN=
```

---

## Netlify Configuration

```toml
[build]
  command = "hugo --minify"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.121.0"
```

---

## Agent Setup Prompt

> Use this prompt to hand off repo initialization to Cursor or any AI coding agent.

---

**PROMPT — Rising Tides Blog Repo Setup**

You are setting up a new private GitHub repository called `rising-tides` under the `northharbor-dev` GitHub organization. This is a Markdown-based engineering blog called "Rising Tides" by Bob Hong. Please complete the following tasks:

1. **Initialize the repo structure** exactly as specified:
```
rising-tides/
├── README.md
├── .env.example
├── content/
│   ├── drafts/
│   │   └── .gitkeep
│   └── published/
│       └── .gitkeep
├── scripts/
│   ├── publish.js
│   └── new-post.sh
├── site/
│   └── config.toml
└── netlify.toml
```

2. **Create `netlify.toml`** with Hugo build configuration (Hugo version 0.121.0, build command `hugo --minify`, publish dir `public`).

3. **Create `site/config.toml`** as a basic Hugo config with:
   - Title: "Rising Tides"
   - Author: Bob Hong
   - BaseURL: https://northharbor.dev (placeholder)
   - Use PaperMod or Ananke theme (include as git submodule)

4. **Create `scripts/new-post.sh`** — a bash script that:
   - Accepts a post title as an argument
   - Creates a new `.md` file in `content/drafts/` with a slugified filename
   - Pre-populates frontmatter with title, today's date, empty tags, empty summary, and `status: draft`

5. **Create `scripts/publish.js`** — a Node.js script that:
   - Reads a specified Markdown file from `content/published/`
   - Parses frontmatter using the `gray-matter` npm package
   - Accepts `--post` and `--targets` CLI arguments
   - Has stubbed async functions for posting to: substack, linkedin, devto
   - Each stub logs "Publishing to [target]..." and includes a TODO comment for API integration
   - Reads API keys from environment variables

6. **Create `.env.example`** with placeholder keys:
   - SUBSTACK_API_KEY
   - SUBSTACK_PUBLICATION_URL
   - DEVTO_API_KEY
   - LINKEDIN_ACCESS_TOKEN

7. **Create an initial sample draft** at `content/drafts/introducing-rising-tides.md` with appropriate frontmatter and