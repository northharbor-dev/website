---
title: "Introducing Rising Tides"
date: 2026-03-03
draft: false
tags: [meta, ai-agents, northharbor]
summary: "Why we're documenting the build in public — and what Rising Tides is for."
---

There's a version of this blog that's a marketing exercise. Polished case studies, vague references to "AI-powered workflows," a lot of words that don't say much.

This isn't that.

Rising Tides is a working journal. I'm building NorthHarbor — a coordination platform for AI-assisted software development — and I'm documenting the real decisions, tradeoffs, dead ends, and occasionally surprising successes along the way.

## What NorthHarbor is

The short version: AI coding agents are individually capable. Tools like Cursor have proven that at this point. But when you run multiple specialized agents in parallel on the same project, a new class of problem emerges.

Agents pick up work out of order. Two agents claim the same task. A blocker on one agent silently cascades to five others. Humans have no view across concurrent workstreams without reading raw logs.

These aren't capability problems. They're coordination problems. That's what I'm building the infrastructure to solve.

The first piece is [Waypoint](https://github.com/northharbor-dev/waypoint) — an open-source CLI that models work items as a directed acyclic graph, with atomic task claiming so agents can't step on each other. Next comes Pilot, a coordination brain that surfaces agent decisions to humans in a prioritized, actionable format. And Breezy — a mobile PR review app — is the first real project being built end-to-end using the platform.

## Why document it in public

A few reasons.

First, the problem I'm solving is real but not widely understood. "Coordination layer for AI agents" sounds abstract until you've watched two agents produce conflicting implementations of the same interface because neither knew the other was working on it. Writing publicly forces me to explain the problem clearly, which clarifies my own thinking.

Second, the right co-founder — when the time comes — is going to find this work before I find them. The kind of operator I want to bring in will recognize the mission from reading the thinking, not from a pitch deck.

Third: I'm building a multi-agent software development system using AI to help me write about building a multi-agent software development system. The implicit demonstration is the point. If the tools work, you'll see it in how the work moves.

## What to expect

One post every two weeks, roughly. The topics will track what I'm actually working on:

- Architecture decisions in Waypoint and Pilot
- The design challenge of surfacing agent decisions without drowning humans in noise
- What a services-first AI delivery firm actually looks like in practice
- Honest reporting on what's working and what isn't

No hype. No "revolutionary." Just the build.

---

*Bob Hong is the founder of NorthHarbor Development. He writes about AI-first engineering, agent coordination, and building the future of software development.*
