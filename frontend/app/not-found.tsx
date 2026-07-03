import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background py-24 text-foreground">
      <Container className="max-w-2xl">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          This surface is not part of the current Tessera frontend shell.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </Container>
    </main>
  );
}
