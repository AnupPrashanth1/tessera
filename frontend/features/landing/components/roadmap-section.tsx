import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/features/landing/components/section-heading';

const milestones = [
  'Repository foundation',
  'Frontend shell',
  'Backend foundation',
  'Authentication',
  'Database integration',
  'AI agents',
  'GraphRAG',
  'Risk scoring',
  'Reporting',
  'Deployment',
];

export function RoadmapSection() {
  return (
    <section className="py-20" id="roadmap">
      <Container>
        <SectionHeading
          description="The foundation keeps the product ready for future authenticated layouts, dashboards, graph exploration, reporting, and AI workflows."
          eyebrow="Development roadmap"
          title="Built to support the complete Tessera delivery path."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {milestones.map((milestone, index) => (
            <div
              className="flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3"
              key={milestone}
            >
              <span className="text-sm">{milestone}</span>
              <Badge variant={index < 2 ? 'success' : 'default'}>
                {index < 2 ? 'active' : 'next'}
              </Badge>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
