---
title: "Products"
subtitle: "A family of tools and products built around one principle: agents propose, humans approve."
---

## The Tides Platform {#tides}

Tides is the coordination platform for software development teams working with AI agents. It provides the infrastructure — task graphs, atomic task claiming, conflict detection, decision surfacing, and observability — that makes multi-agent development reliable and human-controlled at scale.

### Components

---

### Waypoint {#waypoint}

**Graph-based work tracking for AI-assisted development teams.**

Waypoint models work items and their dependencies as a directed acyclic graph (DAG), backed by MongoDB. It answers one question: *What should I work on next?* — for both humans and AI agents.

- Agents discover and claim only tasks they're qualified for and whose prerequisites are complete
- Atomic task claiming prevents two agents from picking up the same work
- DAG validation catches invalid dependency chains before they cause problems
- Built-in crash recovery: if an agent fails mid-task, the work is released for another to pick up

**Status:** Active — open source, published, under active development.
**License:** Apache-2.0

[View on GitHub →](https://github.com/northharbor-dev/waypoint)

---

### Pilot {#pilot}

**The central coordination brain for multi-agent projects.**

Pilot aggregates alerts and dependency conflicts raised by AI agents, analyzes proposed changes to the task graph, ranks them by impact, and presents prioritized decisions to humans through a real-time web interface.

- Signal aggregation: agents publish structured events; Pilot correlates them across the full project graph
- Decision intelligence: conflicts and proposals ranked by impact — not surfaced as raw logs
- Human approval gates: every significant plan change requires explicit sign-off before taking effect
- Full audit trail of every decision, approval, and rejection

**Status:** In design — requirements and architecture phase.
**License:** Proprietary

---

### Outfitter {#outfitter}

**AI-powered discovery coach that prepares your project for the voyage ahead.**

Outfitter guides teams through problem definition and solution discovery — the step that happens *before* any agent writes a line of code. Using a voice-first, multimodal coaching experience, it captures the problem statement, solution vision, non-functional requirements, and end state in a structured artifact ready to seed a Waypoint project plan.

- Three session tiers: 15-minute single-tool brief to 90-minute multi-service platform discovery
- Voice-first input — think out loud, upload async memos, the coach handles the structure
- Output: Markdown brief + structured JSON + Waypoint-ready YAML seed file

**Status:** In design — concept and requirements phase.
**License:** Proprietary

---

## Built on Tides

### Breezy {#breezy}

**The fastest way to review pull requests from your phone.**

Breezy is a mobile-first, AI-ready PR review platform that unifies GitHub and Azure DevOps into a single, fast, and intuitive experience. Built for senior engineers and team leads who need to stay on top of code reviews without being tied to a laptop.

- Unified PR inbox across GitHub and Azure DevOps in a single view
- Mobile-optimized diff viewer with portrait (inline) and landscape (side-by-side) modes
- Inline suggestions with one-tap apply — commits directly to the PR branch
- AI-assisted review: PR summaries, improvement suggestions, and rule-based analysis
- CI status at a glance — see build pass/fail without leaving the PR

Breezy is the first application developed end-to-end using the Tides platform — validating the coordination model in practice.

**Status:** Pre-release — design and architecture phase.
**License:** Proprietary

---

## Separate Product Line

### Sage {#sage}

**Your AI-powered guide to a confident retirement.**

Sage walks you through retirement planning conversationally, builds a personalized plan based on your goals, and helps you understand your options with clear, probability-based projections.

- Conversational intake — no confusing forms
- Monte Carlo simulations showing the range of possible outcomes, not just best-case
- Side-by-side what-if scenario comparisons
- Professional deliverables in PDF, Excel, or Markdown

**Status:** Live at [sage.northharbor.dev](https://sage.northharbor.dev)
**License:** Apache-2.0

[Try Sage →](https://sage.northharbor.dev)
