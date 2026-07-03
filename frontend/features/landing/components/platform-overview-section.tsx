import { Database, Network, Workflow } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/features/landing/components/section-heading';

const layers = [
  { label: 'Analyst workspace', icon: Workflow },
  { label: 'FastAPI control plane', icon: Database },
  { label: 'Graph intelligence', icon: Network },
];

export function PlatformOverviewSection() {
  return (
    <section className="border-b border-border bg-surface/30 py-20" id="platform">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1fr]">
        <SectionHeading
          description="A modular platform shell that will support role-aware workflows, real-time intelligence, graph reasoning, and AI-assisted case work."
          eyebrow="Platform overview"
          title="Built as an investigation operating system."
        />
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="grid gap-3">
            {layers.map((layer, index) => (
              <div
                className="flex items-center justify-between rounded-md border border-border bg-surface-elevated p-4"
                key={layer.label}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <layer.icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{layer.label}</span>
                </div>
                <Badge>{String(index + 1).padStart(2, '0')}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
