---
name: Dependency firewall in workspace installs
description: Replit's package firewall can reject outdated vulnerable transitive packages in broad workspace installs.
---

When a dependency download is blocked, do not bypass the firewall. Check for a current safe version and update its direct parent when appropriate. If the blocked dependency belongs to an unrelated workspace package, install only the target artifact and its dependencies for task-specific validation instead of changing unrelated tooling.

**Why:** A website-only change was blocked first by an outdated Express dependency and then by an unrelated code-generation package during full workspace installation.

**How to apply:** Identify the dependency path before changing manifests. Prefer a compatible parent update for known vulnerable packages; use a filtered workspace install when other packages are outside the current work.
