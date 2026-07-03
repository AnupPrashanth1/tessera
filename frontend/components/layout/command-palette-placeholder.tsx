'use client';

import { Search } from 'lucide-react';

export function CommandPalettePlaceholder() {
  return (
    <button
      aria-label="Open command palette"
      className="hidden h-9 min-w-56 items-center gap-2 rounded-md border border-border bg-surface px-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:flex"
      type="button"
    >
      <Search aria-hidden="true" className="size-4" />
      <span className="flex-1">Search intelligence</span>
      <kbd className="rounded-sm border border-border bg-background px-1.5 py-0.5 font-mono text-[10px]">
        Ctrl K
      </kbd>
    </button>
  );
}
