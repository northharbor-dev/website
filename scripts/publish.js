#!/usr/bin/env node
/**
 * publish.js — cross-post a Rising Tides post to Substack and/or LinkedIn
 *
 * Usage:
 *   node scripts/publish.js --post my-post-title.md --targets substack,linkedin
 *
 * Required env vars (see .env.example):
 *   SUBSTACK_API_KEY, SUBSTACK_PUBLICATION_URL
 *   LINKEDIN_ACCESS_TOKEN
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const args = process.argv.slice(2)
const getArg = (flag) => {
  const i = args.indexOf(flag)
  return i !== -1 ? args[i + 1] : null
}

const postArg = getArg('--post')
const targetsArg = getArg('--targets') || 'substack,linkedin'

if (!postArg) {
  console.error('Usage: node scripts/publish.js --post <filename> [--targets substack,linkedin]')
  process.exit(1)
}

const filePath = path.resolve('content/blog', postArg)
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`)
  process.exit(1)
}

const raw = fs.readFileSync(filePath, 'utf8')
const { data: frontmatter, content } = matter(raw)

if (frontmatter.draft) {
  console.error('Post is still a draft. Set draft: false before publishing.')
  process.exit(1)
}

const targets = targetsArg.split(',').map(t => t.trim())

console.log(`\nPublishing: "${frontmatter.title}"`)
console.log(`Targets: ${targets.join(', ')}\n`)

// ── Substack ──────────────────────────────────────────────────────────────────
async function publishToSubstack(frontmatter, content) {
  const apiKey = process.env.SUBSTACK_API_KEY
  const publicationUrl = process.env.SUBSTACK_PUBLICATION_URL
  if (!apiKey || !publicationUrl) {
    console.warn('Substack: missing SUBSTACK_API_KEY or SUBSTACK_PUBLICATION_URL — skipping')
    return
  }
  console.log('Publishing to Substack...')
  // TODO: implement Substack API integration
  // POST to ${publicationUrl}/api/v1/posts with apiKey auth
  // Body: { title, body_html, draft: false }
  console.log('  ✓ Substack: stub complete (implement API call)')
}

// ── LinkedIn ──────────────────────────────────────────────────────────────────
async function publishToLinkedIn(frontmatter, content) {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN
  if (!accessToken) {
    console.warn('LinkedIn: missing LINKEDIN_ACCESS_TOKEN — skipping')
    return
  }
  console.log('Publishing to LinkedIn...')
  // TODO: implement LinkedIn Share API integration
  // POST https://api.linkedin.com/v2/ugcPosts with Bearer auth
  // Body: article share with title, summary, and URL
  console.log('  ✓ LinkedIn: stub complete (implement API call)')
}

// ── dev.to ────────────────────────────────────────────────────────────────────
async function publishToDevto(frontmatter, content) {
  const apiKey = process.env.DEVTO_API_KEY
  if (!apiKey) {
    console.warn('dev.to: missing DEVTO_API_KEY — skipping')
    return
  }
  console.log('Publishing to dev.to...')
  // TODO: implement dev.to API integration
  // POST https://dev.to/api/articles with api-key header
  // Body: { article: { title, body_markdown, tags, published: true } }
  console.log('  ✓ dev.to: stub complete (implement API call)')
}

// ── Run ───────────────────────────────────────────────────────────────────────
for (const target of targets) {
  switch (target) {
    case 'substack': await publishToSubstack(frontmatter, content); break
    case 'linkedin': await publishToLinkedIn(frontmatter, content); break
    case 'devto':    await publishToDevto(frontmatter, content); break
    default:
      console.warn(`Unknown target: ${target}`)
  }
}

console.log('\nDone.')
