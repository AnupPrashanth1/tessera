import { ArrowDown } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/features/landing/components/section-heading';

const architecture = [
  'User',
  'Next.js Frontend',
  'FastAPI Backend',
  'PostgreSQL + Neo4j + Redis',
  'AI Agent Layer',
  'Knowledge Graph',
];

export function ArchitecturePreviewSection() {
  return (
    <section className="border-b border-border bg-surface/30 py-20" id="architecture">
      <Container>
        <SectionHeading
          description="The frontend foundation mirrors the larger Tessera platform architecture while keeping application concerns cleanly separated."
          eyebrow="Architecture preview"
          title="A clear path from product shell to intelligence platform."
        />
        <div className="mt-10 grid gap-3">
          {architecture.map((item, index) => (
            <div className="flex flex-col items-center gap-3" key={item}>
              <div className="flex w-full max-w-2xl items-center justify-between rounded-md border border-border bg-background px-4 py-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium">{item}</span>
                <Badge variant={index === 1 ? 'primary' : 'default'}>
                  {index === 1 ? 'current' : 'planned'}
                </Badge>
              </div>
              {index < architecture.length - 1 ? (
                <ArrowDown aria-hidden="true" className="size-4 text-muted-foreground" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
