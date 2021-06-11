#!/usr/bin/env bash
set -xeo pipefail


TARGET=$1

if [ -z "$TARGET" ] || [ ! -d "$TARGET" ] ; then
  exit 1
fi

if [ -n "$PREVIEW_FTP_HOST" ] && [ "$PREVIEW_FTP_PATH" ] && [ -n "$PREVIEW_FTP_USERNAME" ] && [ -n "$PREVIEW_FTP_PASSWORD" ]; then
  cd $TARGET
  ncftpput -mR -v -u "$PREVIEW_FTP_USERNAME" -p "$PREVIEW_FTP_PASSWORD" "$PREVIEW_FTP_HOST" "$PREVIEW_FTP_PATH" ./
else
  exit 1
fi
