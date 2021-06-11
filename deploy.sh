#!/usr/bin/env bash
set -xeo pipefail

BUILD=$1

if [ -z "$BUILD" ] || [ ! -d "$BUILD" ] ; then
  exit 1
fi

if [ -n "$DEPLOY_PATH" ] && [ -d "$DEPLOY_PATH" ]; then
  rsync -rlzv "$BUILD" "$DEPLOY_PATH"

else
  exit 1
fi
