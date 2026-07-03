import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/features/landing/components/section-heading';

const stack = {
  Frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  Interaction: ['Framer Motion', 'Lucide Icons', 'next-themes', 'Sonner'],
  Data: ['TanStack Query', 'TanStack Table', 'Zustand', 'React Hook Form', 'Zod'],
  Visualization: ['Recharts', 'Future graph explorer', 'Responsive dashboards'],
};

export function TechnologyStackSection() {
  return (
    <section className="border-b border-border py-20" id="stack">
      <Container>
        <SectionHeading
          description="Core frontend libraries are installed from the beginning so product modules can grow without restructuring."
          eyebrow="Technology stack"
          title="A modern React foundation for enterprise workflows."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {Object.entries(stack).map(([group, items]) => (
            <div className="rounded-lg border border-border bg-surface-elevated p-5" key={group}>
              <h3 className="text-sm font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
