#!/usr/bin/env bash
# new-post.sh — scaffold a new Rising Tides blog draft
# Usage: ./scripts/new-post.sh "Your Post Title"

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 \"Your Post Title\""
  exit 1
fi

TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')
DATE=$(date +%Y-%m-%d)
FILEPATH="content/blog/${SLUG}.md"

if [ -f "$FILEPATH" ]; then
  echo "File already exists: $FILEPATH"
  exit 1
fi

cat > "$FILEPATH" <<EOF
---
title: "${TITLE}"
date: ${DATE}
draft: true
tags: []
series: []
summary: ""
---

<!-- Write your post here -->
EOF

echo "Created: $FILEPATH"
