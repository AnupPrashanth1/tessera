'use client';

import { Bell } from 'lucide-react';

export function NotificationPlaceholder() {
  return (
    <button
      aria-label="Open notifications"
      className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      type="button"
    >
      <Bell aria-hidden="true" className="size-4" />
    </button>
  );
}
