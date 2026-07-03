import { Activity, Network } from 'lucide-react';
import Link from 'next/link';

import { CommandPalettePlaceholder } from '@/components/layout/command-palette-placeholder';
import { Container } from '@/components/layout/container';
import { NotificationPlaceholder } from '@/components/layout/notification-placeholder';
import { Button } from '@/components/ui/button';
import { appConfig } from '@/config/app';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link aria-label="Tessera home" className="flex items-center gap-3" href="/">
          <span className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
            <Network aria-hidden="true" className="size-5" />
          </span>
          <span className="text-sm font-semibold tracking-wide">{appConfig.name}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {appConfig.navigation.map((item) => (
            <a
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandPalettePlaceholder />
          <NotificationPlaceholder />
          <Button asChild className="hidden sm:inline-flex" size="sm" variant="secondary">
            <a href="#roadmap">
              <Activity aria-hidden="true" className="size-4" />
              Roadmap
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
