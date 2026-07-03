import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { AppProviders } from '@/providers/app-providers';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tessera.ai'),
  title: {
    default: 'Tessera',
    template: '%s | Tessera',
  },
  description:
    'Enterprise AI-native cyber-financial fusion intelligence platform for unified investigations.',
  applicationName: 'Tessera',
  openGraph: {
    type: 'website',
    siteName: 'Tessera',
    title: 'Tessera',
    description:
      'Unify cybersecurity, fraud detection, AI agents, and knowledge graphs into one investigation platform.',
    url: 'https://tessera.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tessera',
    description:
      'Enterprise AI-native cyber-financial fusion intelligence platform for unified investigations.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${inter.variable} ${jetBrainsMono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
