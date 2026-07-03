'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Toaster } from 'sonner';

import { appConfig } from '@/config/app';
import { ThemeProvider } from '@/providers/theme-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 30_000,
          },
        },
      }),
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={appConfig.theme.defaultTheme}
      disableTransitionOnChange
      enableSystem
      storageKey={appConfig.theme.storageKey}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors closeButton position="top-right" theme="dark" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
