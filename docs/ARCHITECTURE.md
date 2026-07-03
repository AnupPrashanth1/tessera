# Tessera Software Architecture

## 1. Vision

Tessera is a Cyber-Financial Fusion Intelligence Platform designed to unify cybersecurity analytics,
fraud detection, financial intelligence, AI-assisted investigations, and knowledge graph reasoning
into a single enterprise investigation environment.

The platform is built around the reality that cyber risk and financial risk are increasingly the
same operational problem. Account takeover, payment fraud, mule networks, insider threats, phishing
infrastructure, identity misuse, sanctions exposure, and anomalous transaction behavior often share
common entities, devices, networks, identities, and behavioral patterns. Traditional systems split
those signals across security operations, fraud operations, compliance teams, and financial crime
units.

Tessera treats those signals as one connected intelligence fabric. Its purpose is to help analysts
detect risk earlier, investigate faster, preserve institutional knowledge, and explain decisions
with defensible evidence. The platform combines structured records, streaming events, graph
relationships, and AI agent reasoning to support real-time monitoring and deep investigation
workflows.

## 2. Product Goals

### Real-Time Monitoring

Tessera should provide live visibility into alerts, entities, risk scores, transaction anomalies,
cyber indicators, and operational health. Dashboards should support both high-level executive views
and detailed analyst triage.

### AI-Assisted Investigations

AI agents should help analysts summarize evidence, identify related entities, propose investigative
next steps, generate narratives, explain risk factors, and reduce repetitive manual correlation
work.

### Cybersecurity Analytics

The platform should ingest and analyze security telemetry such as login events, IP addresses,
devices, network indicators, threat intelligence, authentication anomalies, and suspicious
infrastructure relationships.

### Fraud Detection

Tessera should support fraud pattern detection across transactions, users, accounts, devices,
geographies, velocity rules, behavioral anomalies, and entity networks.

### Knowledge Graph Intelligence

The platform should represent people, accounts, organizations, devices, transactions, alerts, cases,
IP addresses, indicators, and reports as connected graph entities. Graph intelligence should support
relationship discovery, risk propagation, entity resolution, and GraphRAG.

### Executive Reporting

Tessera should convert operational intelligence into executive-level reporting, including risk
trends, investigation outcomes, case volume, high-risk entity clusters, fraud exposure, security
posture, and control effectiveness.

## 3. High-Level System Architecture

```text
User
  |
  v
Next.js Frontend
  |
  v
FastAPI Backend
  |
  +-------------------+
  |                   |
  v                   v
PostgreSQL          Neo4j
  |                   |
  v                   v
Redis <---------- Knowledge Graph
  |
  v
AI Agent Layer
  |
  v
Knowledge Graph
```

### Architectural Summary

The frontend provides role-aware investigation workflows, dashboards, entity exploration, reporting,
and AI copilot experiences. The backend exposes secure APIs, coordinates business logic, manages
authentication, performs risk scoring, and integrates with data stores and AI services.

PostgreSQL acts as the operational system of record. Neo4j provides graph-native relationship
intelligence. Redis supports low-latency caching, ephemeral state, session support, queues, and live
dashboard interactions. The AI Agent Layer coordinates specialized investigation agents that reason
over structured data, graph relationships, alerts, and case context.

## 4. Repository Architecture

The repository is organized as a production-ready monorepo. The current top-level folders are
preserved and aligned to clear ownership boundaries.

```text
tessera/
  frontend/
  backend/
  infrastructure/
  synthetic-data/
  docs/
  .github/
```

### `frontend`

Owns the Next.js application, user interface, dashboards, investigation workflows, visualization
layer, shared UI primitives, and frontend integration with backend APIs.

Future structure:

```text
frontend/
  app/
  components/
  features/
  hooks/
  lib/
  providers/
  services/
  styles/
  types/
  utils/
  assets/
```

### `backend`

Owns the FastAPI application, API routes, service layer, domain workflows, repositories, database
integration, AI orchestration, background jobs, authentication, authorization, and streaming
integration.

Future structure:

```text
backend/
  app/
    api/
    core/
    db/
    models/
    schemas/
    services/
    repositories/
    agents/
    workers/
    security/
    streaming/
    observability/
  tests/
```

### `infrastructure`

Owns containerization, local development services, cloud infrastructure, CI/CD deployment
configuration, secrets integration, observability, and environment management.

Future structure:

```text
infrastructure/
  docker/
  kubernetes/
  terraform/
  environments/
  observability/
  scripts/
```

### `synthetic-data`

Owns synthetic datasets, scenario definitions, generation plans, schemas, and repeatable demo data
for cyber-financial investigations. It must never contain real customer data, credentials, private
financial records, or production incident data.

Future structure:

```text
synthetic-data/
  schemas/
  scenarios/
  generators/
  samples/
  validation/
```

### `docs`

Owns architecture documentation, design decisions, diagrams, project reports, threat models,
milestone plans, and operating guides.

Future structure:

```text
docs/
  architecture/
  decisions/
  diagrams/
  product/
  security/
  operations/
  reports/
```

### `.github`

Owns repository automation including issue templates, pull request templates, Dependabot
configuration, and CI workflows.

## 5. Frontend Architecture

The frontend should be implemented as a Next.js application using the App Router. It should
prioritize analyst productivity, dense information display, fast navigation, predictable workflows,
and high trust in data visualization.

### App Router Structure

The `app/` directory should own route definitions, route-specific layouts, loading states, error
boundaries, and server/client composition. It should remain thin. Business logic, reusable UI, API
clients, and feature behavior should live outside route files.

Recommended route groups:

- Public routes for login and unauthenticated experiences.
- Authenticated dashboard routes for analyst, executive, and admin users.
- Investigation workspace routes for cases, entities, alerts, and reports.
- Settings routes for account, organization, access control, and integrations.

### Layout Hierarchy

The layout hierarchy should separate global application chrome from role-specific workspaces.

- Root layout: global metadata, providers, theme, and application shell foundations.
- Auth layout: login and identity recovery experiences.
- App layout: authenticated shell with side navigation, top navigation, command palette, and
  notification surface.
- Dashboard layout: dashboard-specific grid system and role-aware page containers.
- Investigation layout: split-pane analysis workspace for alerts, entities, graph context, evidence,
  and AI assistance.

### Component Hierarchy

Components should be organized by reuse level:

- UI primitives: buttons, inputs, dialogs, tables, badges, cards, and navigation primitives.
- Composite components: KPI cards, alert tables, timeline views, entity cards, graph panels, and
  report summaries.
- Feature components: dashboard widgets, case views, investigation panels, AI copilot panels, and
  entity relationship surfaces.
- Route components: page-level composition only.

### Shared UI Library

The shared UI layer should provide consistent primitives built on accessible components, Tailwind
CSS, and shadcn/ui conventions. Components should be visually consistent, theme-aware, keyboard
accessible, and safe for use across all feature modules.

### Feature Modules

Feature modules should own user workflows. Each module should encapsulate its screens, local
components, hooks, service calls, and domain-specific types. Modules should depend on shared UI and
shared services, but should not directly import implementation details from other feature modules.

### State Management

State should be divided by lifespan and ownership:

- Server state: API responses, pagination, filters, search results, and entity data.
- Client state: UI preferences, open panels, selected tabs, command palette state, and local filter
  controls.
- Session state: authenticated user, role, organization context, and active workspace.
- Real-time state: alert updates, case activity, and dashboard stream updates.

The platform should prefer server state libraries and URL-driven state for shareable investigation
context.

### API Layer

The frontend API layer should provide typed clients for backend endpoints, central error handling,
request tracing, authentication token handling, retry policy, and response normalization. Route
components should not construct raw fetch calls directly.

### Theme System

The theme system should support a dark-first enterprise intelligence interface with carefully
controlled contrast, semantic status colors, data visualization palettes, and future light-mode
support. Theme values should be represented as design tokens rather than scattered hardcoded values.

## 6. Application Routes

### `/`

Primary entry point. For unauthenticated users, it should route to login or a controlled product
entry page. For authenticated users, it should route to the appropriate dashboard based on role.

### `/dashboard`

General authenticated dashboard landing page. It should summarize risk posture, active alerts,
recent cases, system activity, and recommended investigation priorities.

### `/dashboard/analyst`

Analyst operations dashboard. It should focus on alert queues, active cases, entity risk, triage
workload, investigation progress, and AI-suggested next actions.

### `/dashboard/executive`

Executive reporting dashboard. It should summarize risk exposure, fraud trends, case outcomes,
financial impact, control performance, and high-level operational metrics.

### `/dashboard/admin`

Administrative dashboard. It should show system health, user activity, integrations, ingestion
status, job status, access control events, and configuration warnings.

### `/cases`

Case management workspace. It should support case queues, ownership, status, severity, evidence
summaries, assignment, escalation, and closure workflows.

### `/entities`

Entity intelligence workspace. It should allow exploration of users, accounts, devices, IP
addresses, organizations, transactions, indicators, and their relationships.

### `/alerts`

Alert triage workspace. It should support filtering, sorting, prioritization, status transitions,
risk explanations, linked entities, and conversion into investigations or cases.

### `/investigations`

Deep investigation workspace. It should combine timelines, graph context, evidence panels, AI
copilot assistance, notes, related alerts, and narrative generation.

### `/settings`

Configuration area for user preferences, organization settings, integrations, notification
preferences, access policy, and platform behavior.

### `/reports`

Reporting workspace. It should provide generated investigation reports, executive summaries, risk
trend exports, case closure reports, and future scheduled reporting.

### `/login`

Authentication entry point. It should support secure login, future SSO flows, and recovery paths
without exposing internal application structure.

### `/profile`

User profile and personal settings page. It should include account metadata, notification
preferences, role visibility, active sessions, and security settings.

## 7. Backend Architecture

The backend should begin as a modular FastAPI service with explicit internal boundaries. The initial
architecture should support future extraction into microservices without prematurely distributing
the system.

### API Layer

The API layer exposes versioned HTTP endpoints for frontend and integration clients. It should
handle request validation, authentication enforcement, response shaping, pagination, filtering, and
error translation.

### Service Layer

The service layer owns business workflows such as alert triage, case management, entity enrichment,
risk scoring, report generation, and agent orchestration. Services coordinate repositories, graph
queries, cache operations, and background jobs.

### Repository Layer

The repository layer owns database access. It should isolate PostgreSQL queries, Neo4j graph
operations, Redis access patterns, and future external data source integrations from business logic.

### Database Layer

The database layer manages connections, migrations, transactions, session lifecycle, query
performance, and data access conventions. It should enforce predictable database boundaries and
observability around slow queries.

### AI Layer

The AI layer coordinates agent calls, prompt policy, tool access, GraphRAG retrieval, response
validation, explainability, and safety controls. It should preserve traceability from AI outputs
back to source evidence.

### Background Workers

Background workers should handle ingestion, enrichment, graph updates, report generation, scheduled
scans, risk score recalculation, notification fan-out, and long-running AI workflows.

### Authentication

Authentication should support secure session handling, password-based login for development, and
future enterprise SSO. Identity decisions should be centralized and auditable.

### Streaming

Streaming should support alert ingestion, transaction events, security telemetry, risk updates,
dashboard refreshes, and worker coordination. Kafka or Redpanda should serve as the future durable
event backbone.

## 8. Database Design

### PostgreSQL

PostgreSQL is the operational system of record. It should store durable structured data, workflow
state, access control, and auditability.

Core table families:

- `users`: application users, identity metadata, status, and profile attributes.
- `organizations`: tenant or organization records for future SaaS expansion.
- `roles`: role definitions such as analyst, executive, admin, and service account.
- `permissions`: fine-grained permission catalog.
- `user_roles`: user-to-role assignments.
- `cases`: investigation cases, ownership, status, severity, summaries, and lifecycle metadata.
- `case_events`: case timeline events, comments, state changes, assignments, and evidence
  attachments.
- `alerts`: normalized alert records from cyber, fraud, identity, and financial sources.
- `alert_signals`: individual signals contributing to an alert.
- `entities`: canonical entity registry for relational lookup and cross-store references.
- `entity_links`: relational references between entities when graph synchronization is needed.
- `transactions`: normalized transaction metadata for fraud and financial intelligence workflows.
- `risk_scores`: current and historical risk scores with model or rule provenance.
- `reports`: generated reports, status, authorship, and export metadata.
- `audit_logs`: immutable security and administrative audit events.
- `integrations`: configured external systems and ingestion sources.
- `jobs`: background job state, scheduling metadata, and failure information.
- `agent_runs`: AI agent execution records, inputs, outputs, evidence references, and trace
  metadata.

### Neo4j

Neo4j is the relationship intelligence layer. It should model the investigation graph and support
traversal, pattern discovery, entity clustering, risk propagation, and GraphRAG retrieval.

Primary node labels:

- `Person`
- `User`
- `Account`
- `Organization`
- `Device`
- `IPAddress`
- `Location`
- `Transaction`
- `Alert`
- `Case`
- `Indicator`
- `Domain`
- `Email`
- `Phone`
- `Wallet`
- `BankAccount`
- `Report`
- `ThreatActor`
- `Campaign`

Primary relationship types:

- `OWNS`
- `USES`
- `LOGGED_IN_FROM`
- `CONNECTED_TO`
- `TRANSFERRED_TO`
- `ASSOCIATED_WITH`
- `TRIGGERED`
- `MENTIONED_IN`
- `PART_OF`
- `LINKED_TO`
- `INVESTIGATED_IN`
- `ENRICHED_BY`
- `SIMILAR_TO`
- `RISK_PROPAGATES_TO`

### Redis

Redis should be used for low-latency operational needs rather than long-term storage.

Primary usage:

- Session storage where appropriate.
- API response caching for high-read dashboards.
- Rate limiting and abuse protection.
- Short-lived investigation workspace state.
- Real-time dashboard counters.
- Background job coordination.
- Pub/sub notifications for live UI updates.
- Temporary AI orchestration state.

## 9. AI Architecture

The AI architecture should be agentic, explainable, bounded, and evidence-aware. AI should assist
analysts rather than silently replace investigative judgment.

### Agent Orchestrator

The Agent Orchestrator coordinates specialized agents, selects tools, retrieves context, manages
execution state, enforces safety policy, and returns structured outputs. It should record agent
traces, evidence references, model inputs, model outputs, and confidence indicators.

### Network Agent

The Network Agent analyzes IP addresses, device behavior, login patterns, domains, infrastructure
reuse, geolocation anomalies, and threat intelligence indicators. It helps identify suspicious
infrastructure relationships and account takeover patterns.

### Fraud Agent

The Fraud Agent analyzes transactions, velocity patterns, payment destinations, account behavior,
mule indicators, amount anomalies, device reuse, and relationship clusters associated with financial
fraud.

### Identity Agent

The Identity Agent analyzes users, accounts, credentials, profile changes, authentication events,
privilege changes, device binding, and identity risk signals.

### Threat Intelligence Agent

The Threat Intelligence Agent enriches indicators, campaigns, domains, IP addresses, malware
references, tactics, techniques, and procedures. It connects external intelligence to internal
alerts and graph entities.

### Narrative Agent

The Narrative Agent converts investigation evidence into clear summaries, case narratives, executive
explanations, and report-ready language. It must cite evidence and avoid unsupported claims.

### Explainability Agent

The Explainability Agent explains why an alert, case, entity, or cluster is risky. It should
identify contributing signals, graph paths, risk score factors, uncertainty, and recommended
validation steps.

### GraphRAG

GraphRAG should retrieve relevant graph neighborhoods, entity relationships, timelines, prior cases,
reports, and supporting evidence before agent reasoning. Responses should be grounded in graph
context and structured records.

### MCP Integration

Model Context Protocol integration should provide controlled access to internal tools and external
systems. MCP servers may expose graph queries, document search, case lookup, threat intelligence
enrichment, reporting tools, or sandboxed data analysis. Tool access should be permissioned, logged,
and scoped to the active user and investigation.

## 10. Event Flow

Alert lifecycle:

```text
1. Event arrives from cyber, fraud, identity, transaction, or synthetic data source.
2. Ingestion normalizes the event into a standard alert or signal format.
3. Backend validates the event, assigns source metadata, and stores durable records in PostgreSQL.
4. Entity extraction identifies accounts, users, devices, IP addresses, transactions, and indicators.
5. Neo4j graph is updated with entities and relationships.
6. Redis updates live counters, dashboard state, and short-lived alert queues.
7. Risk scoring evaluates severity, confidence, business impact, and graph context.
8. AI Agent Orchestrator selects relevant agents for enrichment and explanation.
9. Agents retrieve PostgreSQL records, graph neighborhoods, and prior case context.
10. Alert explanation, related entities, recommended actions, and risk rationale are attached.
11. Analyst reviews the alert in the triage workspace.
12. Analyst dismisses, escalates, links to an existing case, or creates a new investigation.
13. Case timeline and audit logs are updated.
14. Dashboards and reports reflect the latest operational state.
```

This flow should preserve traceability from the original event through normalization, enrichment,
scoring, AI reasoning, analyst action, and reporting.

## 11. Security Architecture

### Authentication

Tessera should support secure authentication with a migration path toward enterprise SSO.
Authentication events should be logged and monitored. Sessions should have expiration, revocation,
and device visibility.

### Authorization

Authorization should be enforced on the backend for every protected resource. Frontend role checks
improve user experience but must not be trusted as enforcement.

### RBAC

Role-Based Access Control should define roles such as analyst, senior analyst, executive,
administrator, auditor, and service account. Permissions should control access to cases, entities,
reports, settings, integrations, AI tools, and administrative actions.

### Secrets

Secrets must never be committed to source control. Local development should use environment files
that are ignored by Git. Production secrets should be managed through a dedicated secrets manager or
deployment provider secret store.

### Audit Logging

The platform should audit authentication, authorization failures, data access, case actions, report
generation, administrative changes, integration updates, AI agent runs, and sensitive exports.

### Zero Trust

Tessera should assume every request must be authenticated, authorized, validated, logged, and rate
limited. Internal service calls should use explicit trust boundaries, least privilege, and future
service identity.

Additional controls:

- Input validation for all APIs.
- Output encoding in frontend surfaces.
- Secure headers and CSRF protections where applicable.
- Rate limits on authentication and AI endpoints.
- Tenant isolation for future SaaS operation.
- Encryption in transit and at rest.
- Data minimization for AI prompts.
- Human review for high-impact AI recommendations.

## 12. Future Microservices

Tessera should begin as a modular monolith and evolve into microservices only when scale, team
ownership, or operational requirements justify extraction.

Planned services:

- Identity Service: authentication, users, roles, sessions, and access policy.
- Case Management Service: cases, assignments, timelines, comments, and workflow state.
- Alert Service: alert ingestion, triage state, severity, routing, and deduplication.
- Entity Service: canonical entity registry, entity resolution, and relationship metadata.
- Graph Service: graph writes, traversal APIs, graph algorithms, and graph export.
- Risk Scoring Service: scoring models, rule evaluation, feature calculation, and score history.
- AI Orchestration Service: agent execution, GraphRAG, tool use, traces, and AI safety policy.
- Reporting Service: report generation, scheduled exports, executive summaries, and evidence packs.
- Streaming Ingestion Service: Kafka or Redpanda consumers, normalization, and event validation.
- Notification Service: in-app alerts, email notifications, webhooks, and escalation workflows.
- Integration Service: connectors for SIEM, fraud systems, AML tools, threat intelligence, and data
  warehouses.
- Audit Service: immutable event logging, compliance queries, and administrative review.
- Search Service: global search across cases, alerts, entities, reports, and graph metadata.

## 13. Development Roadmap

### Milestone 1: Repository Foundation

Establish monorepo structure, documentation, formatting, linting, GitHub templates, CI, and
development standards.

### Milestone 2: Architecture and Product Definition

Finalize architecture, core domain model, route design, data model, security model, and UX
direction.

### Milestone 3: Frontend Shell

Implement the authenticated application shell, routing structure, layout system, navigation, theme
tokens, and core design system primitives.

### Milestone 4: Backend Foundation

Implement FastAPI project structure, configuration, health checks, logging, API versioning, error
handling, and database connectivity.

### Milestone 5: Authentication and RBAC

Implement login, session management, roles, permissions, protected routes, and audit logging for
access events.

### Milestone 6: Database Integration

Introduce PostgreSQL schema, Neo4j graph model, Redis integration, migrations, seed data, and
repository boundaries.

### Milestone 7: Alert and Case Workflows

Implement alert ingestion, triage, case creation, case timelines, assignments, severity, and
investigation state.

### Milestone 8: Synthetic Data and Streaming

Generate realistic cyber-financial datasets and introduce streaming ingestion with Kafka or
Redpanda.

### Milestone 9: AI Agent Layer

Implement agent orchestration, specialized agents, explainability, evidence grounding, and trace
logging.

### Milestone 10: GraphRAG and Graph Explorer

Integrate graph retrieval, relationship search, graph visualization, path analysis, and entity
neighborhood exploration.

### Milestone 11: Risk Scoring

Implement risk scoring rules, score history, confidence levels, risk explanations, and dashboard
metrics.

### Milestone 12: Reporting

Implement analyst reports, executive reports, report exports, narrative generation, and evidence
summaries.

### Milestone 13: Security Hardening

Complete threat modeling, secret management, audit coverage, rate limiting, input validation, and
operational security checks.

### Milestone 14: Deployment and Observability

Add Docker workflows, production deployment configuration, monitoring, logging, tracing, and
environment documentation.

### Milestone 15: Testing and Final Release

Complete automated testing, integration validation, performance checks, final documentation, demo
scenarios, and release readiness review.

## 14. Design Principles

### Scalability

The architecture should support increasing data volume, graph density, AI workloads, concurrent
users, and streaming throughput without major rewrites.

### Modularity

Frontend features, backend services, repositories, agents, and infrastructure concerns should be
independently understandable and replaceable.

### Maintainability

Code and documentation should favor explicit boundaries, predictable naming, consistent patterns,
and clear ownership over clever abstractions.

### Performance

The platform should optimize for fast dashboard load times, responsive filtering, efficient graph
traversals, bounded AI calls, and predictable background processing.

### Security

Security should be built into every layer, including identity, authorization, data handling, prompt
construction, audit logging, infrastructure, and dependency management.

### Developer Experience

The repository should remain easy to set up, lint, test, document, and extend. Tooling should catch
common issues early and encourage consistent engineering practices.

## 15. Future Expansion

Tessera can evolve into a commercial SaaS platform by adding enterprise-grade platform capabilities
around the core investigation product.

Commercial SaaS expansion areas:

- Multi-tenant organization isolation.
- Enterprise SSO and SCIM provisioning.
- Usage-based billing and subscription management.
- Customer-managed encryption keys.
- Fine-grained data retention policies.
- Integration marketplace for SIEM, EDR, fraud, AML, banking, and cloud systems.
- Customer-specific risk models and graph schemas.
- Scheduled executive reporting and board-level risk packs.
- Compliance evidence exports.
- In-product onboarding and guided investigation workflows.
- Advanced observability and customer health monitoring.
- Deployment options for cloud, private cloud, and regulated environments.
- Dedicated audit, legal hold, and data residency controls.

The architectural path should preserve the ability to start as a focused final-year engineering
project while growing into a credible enterprise intelligence product.

## 16. UI/UX Architecture

Tessera should feel like an enterprise intelligence terminal: dense, fast, precise, and trustworthy.
The visual language should be inspired by the operational clarity of Palantir, the observability
density of Datadog, the information intensity of Bloomberg Terminal, the interaction polish of
Linear, and the deployment confidence of Vercel, while remaining original to Tessera.

### Design Philosophy

The interface should prioritize signal over decoration. Analysts should be able to scan risk, pivot
across entities, inspect evidence, and act quickly without losing context. Executives should see
clear operational posture without needing analyst-level detail. Administrators should manage
configuration and system health without ambiguity.

The product should avoid marketing-style layouts inside the application. It should use dense but
readable work surfaces, strong hierarchy, restrained visual styling, and consistent interaction
patterns.

### Enterprise Intelligence Terminal Aesthetic

The aesthetic should combine:

- Dark-first operational surfaces.
- High-contrast data panels.
- Compact navigation.
- Monospaced accents for identifiers, event IDs, hashes, IP addresses, and timestamps.
- Clear severity encoding.
- Fast keyboard-driven workflows.
- Graph and timeline surfaces that feel analytical rather than decorative.

### Color Palette

The palette should be semantic and functional.

- Background: near-black charcoal for primary application surfaces.
- Surface: layered neutral gray panels with subtle borders.
- Text: high-contrast off-white for primary text and muted gray for secondary text.
- Primary action: cool blue or cyan for interactive focus and system intelligence.
- Success: green for resolved or healthy states.
- Warning: amber for suspicious or elevated-risk states.
- Critical: red for confirmed high-risk or urgent states.
- Fraud: magenta or rose accents used sparingly for fraud-specific risk.
- Graph: categorical colors reserved for entity types, not general decoration.

Colors should meet accessibility contrast targets and should not rely on color alone to communicate
state.

### Typography

Typography should support dense operational reading.

- Primary UI font: modern sans-serif with strong legibility.
- Monospace font: identifiers, timestamps, IPs, hashes, transaction IDs, and log-like data.
- Headings: compact and clear, never oversized inside dashboards.
- Tables: numeric values should align cleanly and remain readable at high density.

### Iconography

Icons should be simple, consistent, and functional. Icon use should clarify actions such as search,
filter, export, assign, escalate, investigate, link entity, open graph, and generate report. Icons
should not become decorative noise.

### Card System

Cards should be used for repeated units such as KPI widgets, entity summaries, alert summaries,
report tiles, and investigation panels. Cards should not be nested unnecessarily. Dashboard sections
should use grid regions and panels rather than decorative stacked cards.

### Spacing System

Spacing should use a consistent scale optimized for data density. Compact spacing is appropriate for
tables, filters, sidebars, timelines, and alert queues. Larger spacing should be reserved for
page-level separation and executive reporting views.

### Motion Principles

Motion should be subtle and purposeful:

- Use motion for panel transitions, filter changes, drawer entry, command palette opening, and graph
  focus changes.
- Avoid slow decorative animation.
- Respect reduced-motion preferences.
- Preserve analyst orientation when switching between alert, entity, graph, and timeline contexts.

### Responsive Breakpoints

The interface should support:

- Mobile: read-only triage, notifications, profile, and executive summaries.
- Tablet: dashboard review, lightweight investigation, and case updates.
- Desktop: primary analyst and admin workflows.
- Wide desktop: graph exploration, split-pane investigation, dashboards, and monitoring walls.

### Dashboard Layout Philosophy

Dashboards should be role-aware. Analyst dashboards should emphasize queues and action. Executive
dashboards should emphasize trend, exposure, and outcome. Admin dashboards should emphasize system
health, ingestion, integrations, and access control.

Dashboard layouts should support scanning from top-level risk to supporting evidence. KPI widgets
should link to the underlying alerts, cases, entities, or reports that support the metric.

### Data Visualization Guidelines

Visualizations should be accurate, explainable, and operationally useful.

- Use time-series charts for risk trends and alert volume.
- Use bar charts for category comparisons.
- Use tables for precise investigation data.
- Use graphs for relationships, not simple lists.
- Use timelines for event sequences and case history.
- Show units, time windows, filters, and data freshness.
- Avoid misleading 3D effects in analytical charts.
- Preserve access to raw evidence behind summarized views.

### Accessibility Goals

Tessera should target accessible enterprise operation:

- Keyboard navigation for all primary workflows.
- Visible focus states.
- Sufficient text contrast.
- Reduced-motion support.
- Screen-reader labels for controls and status.
- Non-color indicators for severity.
- Predictable tab order.
- Accessible dialogs, drawers, menus, and command palette behavior.

## 17. Design System

The design system should provide reusable primitives and composite components that keep Tessera
consistent as the product grows.

### Buttons

Buttons trigger explicit actions such as assign, escalate, export, investigate, save, cancel, and
generate report. Variants should include primary, secondary, destructive, ghost, icon-only, and
loading states.

### Inputs

Inputs collect text, search queries, identifiers, thresholds, notes, and configuration values. They
should support validation, disabled states, helper text, error text, and clear focus behavior.

### Selects

Selects support controlled option choices such as severity, status, role, owner, integration type,
entity type, and report format. They should handle search where option sets are large.

### Tables

Tables are central to Tessera. They should support sorting, filtering, pagination, column
visibility, row selection, density modes, status indicators, and links to source records.

### Cards

Cards summarize repeatable objects such as entities, alerts, cases, reports, integrations, and KPI
values. They should expose primary status, key metadata, and a clear action path.

### KPI Widgets

KPI widgets communicate metrics such as open alerts, high-risk entities, case closure rate, fraud
exposure, ingestion health, and AI-assisted investigations. Each KPI should have a source, time
window, trend, and drill-down path.

### Charts

Charts visualize trends, distributions, severity mix, operational throughput, and risk movement.
They should be theme-aware, accessible, and consistent in axes, legends, and tooltips.

### Alerts

Alert UI components communicate system messages, risk notices, validation errors, and investigation
warnings. They should distinguish informational, warning, critical, success, and system states.

### Badges

Badges represent compact metadata such as severity, status, entity type, role, source system,
confidence, and data freshness.

### Modals

Modals should be reserved for focused decisions that temporarily block the workflow, such as
confirmation, assignment, escalation, and destructive actions.

### Drawers

Drawers should support contextual inspection without leaving the current page. They are appropriate
for entity previews, alert details, case summaries, and AI explanations.

### Command Palette

The command palette should support fast navigation, entity search, recent cases, actions, shortcuts,
and AI-assisted commands. It should be keyboard-first and permission-aware.

### Side Navigation

Side navigation should expose the primary application areas: dashboard, alerts, cases, entities,
investigations, reports, settings, and admin surfaces.

### Top Navigation

Top navigation should provide global search, command palette access, notifications, user profile,
organization context, and environment awareness.

### Timeline Components

Timelines show alert progression, transaction sequences, case activity, authentication history, and
investigation evidence. They should support mixed event types and clear timestamps.

### Entity Cards

Entity cards summarize graph entities such as users, accounts, devices, IP addresses, transactions,
organizations, and indicators. They should show entity type, risk level, relationships, recent
activity, and investigation links.

### Investigation Panels

Investigation panels compose evidence, graph context, timeline, notes, AI output, related alerts,
and recommended actions. They should support split-pane workflows and preserve context while
analysts pivot.

## 18. Frontend Folder Ownership

### `app/`

Owns routes, layouts, loading states, error boundaries, and route composition. It should not contain
reusable business logic, shared services, or large feature implementations.

### `components/`

Owns shared UI primitives and cross-feature composite components. It should not contain
route-specific data fetching or feature-specific business workflows.

### `features/`

Owns domain-specific frontend modules such as alerts, cases, entities, dashboards, investigations,
reports, and AI copilot. Feature modules may contain local components, hooks, types, and service
adapters for that feature.

### `hooks/`

Owns shared reusable hooks that are not specific to one feature. Feature-specific hooks should stay
inside their feature module.

### `lib/`

Owns shared library configuration, clients, constants, validation helpers, and framework
integrations. It should not become a dumping ground for unrelated utilities.

### `providers/`

Owns React context providers for theme, authentication state, query clients, notifications, command
palette, and application shell state.

### `services/`

Owns frontend service clients for backend APIs, authentication, telemetry, and future real-time
channels. It should centralize request behavior and avoid raw API calls inside page components.

### `styles/`

Owns global styles, theme tokens, Tailwind layers, and design-system styling foundations.
Component-specific styling should stay close to the component when appropriate.

### `types/`

Owns shared TypeScript types used across multiple modules. Feature-specific types should remain
within the relevant feature module unless they become shared contracts.

### `utils/`

Owns small pure utility functions that are broadly reusable. It should not contain stateful
services, API calls, React components, or business workflows.

### `assets/`

Owns static assets such as icons, images, illustrations, logos, and local visualization assets. It
should not contain generated datasets or runtime user uploads.

## 19. Component Naming Convention

### Pages

Page files should represent route entry points and use route-driven naming through the Next.js App
Router. Page components should remain composition-focused.

### Layouts

Layouts should be named by scope and responsibility, such as Root Layout, Auth Layout, App Layout,
Dashboard Layout, and Investigation Layout.

### Components

Components should use PascalCase and describe the object or interaction they represent, such as
AlertTable, EntityCard, RiskBadge, CaseTimeline, and InvestigationPanel.

### Hooks

Hooks should use camelCase with a `use` prefix, such as useActiveCase, useCommandPalette,
useEntitySearch, and useDashboardFilters.

### Contexts

Contexts should use PascalCase with a `Context` suffix, such as AuthContext, ThemeContext,
CommandPaletteContext, and WorkspaceContext.

### Services

Services should use clear domain names, such as AlertService, CaseService, EntityService,
ReportService, AuthService, and GraphService.

### API Clients

API clients should be named by backend boundary and purpose, such as alertsApi, casesApi,
entitiesApi, reportsApi, authApi, and graphApi.

### Utilities

Utilities should use camelCase verb or noun names that describe pure behavior, such as
formatRiskScore, parseEntityId, groupAlertsBySeverity, and calculateTrendDelta.

### Types

Types should use PascalCase and represent domain concepts, such as Alert, Case, Entity, RiskScore,
Investigation, Report, UserRole, and GraphRelationship.

### Constants

Constants should use descriptive uppercase names for fixed values and PascalCase objects for grouped
configuration, such as DEFAULT_PAGE_SIZE, MAX_EXPORT_ROWS, SeverityConfig, and EntityTypeConfig.

## 20. Feature Module Boundaries

Feature modules should be cohesive, independently understandable units of frontend behavior. Modules
may communicate through shared services, shared types, URL state, and explicit events, but should
not import each other's internal components or private hooks.

### Dashboard

Owns dashboard pages, KPI widgets, role-specific summaries, trend panels, and operational overview
components. It consumes alert, case, entity, and report data through shared service clients.

### Cases

Owns case queues, case detail views, assignment controls, case timelines, status transitions,
evidence summaries, and closure workflows. It interacts with alerts, entities, and investigations
through shared contracts.

### Alerts

Owns alert queues, triage tables, severity filters, alert detail panels, risk explanations, and
escalation actions. It can initiate case creation or investigation workflows through service-level
actions.

### Entities

Owns entity search, entity profile views, relationship summaries, risk indicators, and entity
preview components. It should not own the graph explorer implementation, but it may link into graph
views.

### Investigations

Owns the deep analyst workspace, including split-pane evidence review, timeline analysis, notes,
graph context embedding, AI suggestions, and investigation state.

### Reports

Owns report listing, report generation flows, report previews, executive summaries, export controls,
and report metadata.

### Settings

Owns user preferences, organization settings, integrations, role management surfaces, notification
configuration, and administrative controls.

### Authentication

Owns login, session state integration, profile security surfaces, protected route behavior, and
future SSO entry points.

### Notifications

Owns in-app notifications, system messages, escalation notices, background job completion notices,
and notification preferences.

### Search

Owns global search behavior across alerts, cases, entities, reports, and graph metadata. It should
provide search APIs and UI surfaces without taking ownership of destination views.

### Command Palette

Owns keyboard-driven navigation and command execution. It should integrate with search, recent
items, common actions, and role-aware commands.

### AI Copilot

Owns AI chat surfaces, suggested actions, generated summaries, explanation panels, and agent trace
presentation. It should consume the AI backend through explicit service clients and must preserve
evidence links.

### Graph Explorer

Owns interactive graph visualization, relationship traversal, path inspection, node filtering, graph
layout controls, and entity neighborhood exploration. Other modules should link to it through entity
IDs or graph query parameters.

### Coupling Rules

- Modules may import shared UI primitives from `components/`.
- Modules may import shared types from `types/`.
- Modules may call shared API clients from `services/`.
- Modules should not import private components from another module.
- Cross-module workflows should use route navigation, shared service calls, or explicit domain
  events.
- Shared abstractions should be promoted only when at least two modules need the same behavior.
