import { BarChart3, Brain, FileText, Radar, Shield, Share2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/features/landing/components/section-heading';

const capabilities: Array<[string, LucideIcon]> = [
  ['Real-time monitoring', Radar],
  ['AI-assisted investigations', Brain],
  ['Cybersecurity analytics', Shield],
  ['Fraud detection', BarChart3],
  ['Knowledge graph intelligence', Share2],
  ['Executive reporting', FileText],
];

export function CoreCapabilitiesSection() {
  return (
    <section className="border-b border-border py-20" id="capabilities">
      <Container>
        <SectionHeading
          description="The shell is designed around the major product capabilities described in the architecture document."
          eyebrow="Core capabilities"
          title="One platform surface for monitoring, investigation, and reporting."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([label, Icon]) => (
            <Card className="bg-surface" key={label as string}>
              <CardHeader>
                <Icon aria-hidden="true" className="size-5 text-primary" />
                <CardTitle>{label}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Reusable architecture foundation prepared for this product capability.
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
