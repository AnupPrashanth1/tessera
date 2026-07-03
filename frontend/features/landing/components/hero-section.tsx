'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, ShieldCheck } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const signals = [
  ['ATO-8842', 'Identity velocity anomaly', 'critical'],
  ['TXN-4197', 'Transaction ring detected', 'warning'],
  ['IP-203.0.113.42', 'Infrastructure reuse', 'primary'],
  ['CASE-1028', 'Graph cluster expanded', 'success'],
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Badge variant="primary">Cyber-financial fusion intelligence</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Tessera unifies risk signals into one investigation fabric.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            An enterprise AI platform for cybersecurity analytics, fraud detection, knowledge graph
            intelligence, and AI-assisted investigations.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#platform">
                Explore platform
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#architecture">View architecture</a>
            </Button>
          </div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="rounded-lg border border-border bg-surface-elevated shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-critical" />
                <span className="size-2 rounded-full bg-warning" />
                <span className="size-2 rounded-full bg-success" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">fusion-runtime</span>
            </div>
            <div className="grid gap-4 p-4">
              <div className="rounded-md border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Investigation Graph</p>
                    <p className="mt-1 text-xs text-muted-foreground">Live entity correlation</p>
                  </div>
                  <BrainCircuit className="size-5 text-primary" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['Account', 'Device', 'Transaction', 'IP', 'Case', 'Agent'].map((node) => (
                    <div
                      className="rounded-md border border-border bg-surface px-3 py-2 text-center text-xs text-muted-foreground"
                      key={node}
                    >
                      {node}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {signals.map(([id, label, tone]) => (
                  <div
                    className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-3"
                    key={id}
                  >
                    <div>
                      <p className="font-mono text-xs text-foreground">{id}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                    </div>
                    <span
                      className={`h-2 w-12 rounded-full ${
                        tone === 'critical'
                          ? 'bg-critical'
                          : tone === 'warning'
                            ? 'bg-warning'
                            : tone === 'success'
                              ? 'bg-success'
                              : 'bg-primary'
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-md border border-primary/20 bg-primary/10 p-4 text-primary">
                <ShieldCheck className="size-5" />
                <p className="text-sm">Evidence-grounded AI recommendations ready for review.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
