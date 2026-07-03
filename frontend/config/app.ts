import { ROUTES } from '@/constants/routes';

export const appConfig = {
  name: 'Tessera',
  version: '0.1.0',
  description:
    'Enterprise AI-native cyber-financial fusion intelligence platform for unified investigations.',
  navigation: [
    { label: 'Problem', href: '#problem' },
    { label: 'Platform', href: '#platform' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  futureRoutes: {
    dashboard: ROUTES.dashboard,
    alerts: ROUTES.alerts,
    cases: ROUTES.cases,
    entities: ROUTES.entities,
    investigations: ROUTES.investigations,
    reports: ROUTES.reports,
    settings: ROUTES.settings,
  },
  theme: {
    defaultTheme: 'dark',
    storageKey: 'tessera-theme',
  },
  featureFlags: {
    commandPalette: true,
    notifications: true,
    authenticatedShell: false,
    dashboardRoutes: false,
    backendIntegration: false,
  },
} as const;
