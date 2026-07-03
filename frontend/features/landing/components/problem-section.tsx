import { AlertTriangle, GitBranch, Layers3 } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/features/landing/components/section-heading';

const problems = [
  {
    title: 'Security and fraud operate apart',
    description:
      'SIEM, fraud, AML, and case tools often hold related evidence in incompatible models.',
    icon: Layers3,
  },
  {
    title: 'Manual correlation slows response',
    description:
      'Analysts spend critical time connecting identities, devices, transactions, and infrastructure.',
    icon: GitBranch,
  },
  {
    title: 'Risk explanations are fragmented',
    description:
      'Executives and investigators need defensible narratives that connect signals to outcomes.',
    icon: AlertTriangle,
  },
];

export function ProblemSection() {
  return (
    <section className="border-b border-border py-20" id="problem">
      <Container>
        <SectionHeading
          description="Tessera addresses the operational gap between cyber defense, fraud operations, and financial intelligence teams."
          eyebrow="Problem statement"
          title="Traditional tools split one risk story into many disconnected queues."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.title}>
              <CardHeader>
                <problem.icon aria-hidden="true" className="size-5 text-primary" />
                <CardTitle>{problem.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {problem.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
