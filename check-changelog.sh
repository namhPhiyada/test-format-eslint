#!/bin/bash

if git diff --cached --name-only | grep -q "changelog.md"; then
  echo "✅ Changelog.md has been updated."
else
  echo "❌ changelog.md must be updated before commit."
  exit 1
fi
 