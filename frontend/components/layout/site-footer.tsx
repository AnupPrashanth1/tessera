import { Network } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { appConfig } from '@/config/app';

const footerGroups = [
  {
    title: 'Platform',
    links: ['Cybersecurity analytics', 'Fraud detection', 'Knowledge graph', 'AI agents'],
  },
  {
    title: 'Architecture',
    links: ['Next.js frontend', 'FastAPI backend', 'PostgreSQL', 'Neo4j'],
  },
  {
    title: 'Project',
    links: ['Repository foundation', 'Architecture', 'Design system', 'Roadmap'],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_2fr]">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <Network aria-hidden="true" className="size-5" />
            </span>
            <span className="text-sm font-semibold">{appConfig.name}</span>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{appConfig.description}</p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Version {appConfig.version}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
