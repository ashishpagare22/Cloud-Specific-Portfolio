export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const typingWords = ['AWS', 'Docker', 'Kubernetes', 'CI/CD']

export const heroStats = [
  {
    label: 'Deployment mindset',
    value: 'Automate first',
  },
  {
    label: 'Cloud focus',
    value: 'AWS-native',
  },
  {
    label: 'Ops philosophy',
    value: 'Observe everything',
  },
]

export const architectureComponents = [
  {
    id: 'ec2',
    icon: 'Server',
    title: 'EC2 Compute Layer',
    summary: 'Elastic instances run production workloads and deployment targets.',
    detail:
      'Hardened EC2 nodes provide the runtime for application services, secure SSH workflows, and blue-green style release orchestration.',
    layoutClass: 'lg:col-span-4 lg:col-start-1 lg:row-start-1',
  },
  {
    id: 'cicd',
    icon: 'Workflow',
    title: 'CI/CD Pipeline',
    summary: 'Automated testing, image builds, and release promotion live here.',
    detail:
      'GitHub Actions executes checks, builds versioned Docker images, and triggers deployment stages with validation feedback.',
    layoutClass: 'lg:col-span-4 lg:col-start-5 lg:row-start-1',
  },
  {
    id: 's3',
    icon: 'Database',
    title: 'S3 Artifact Store',
    summary: 'Static assets, backups, and deployment packages are stored reliably.',
    detail:
      'S3 acts as the durable layer for build artifacts, environment snapshots, and static content delivery across release cycles.',
    layoutClass: 'lg:col-span-4 lg:col-start-9 lg:row-start-1',
  },
  {
    id: 'docker',
    icon: 'Package',
    title: 'Docker Runtime',
    summary: 'Containerized services keep builds consistent from laptop to cloud.',
    detail:
      'Docker packages the app with predictable dependencies, making local parity and release reproducibility much easier to maintain.',
    layoutClass: 'lg:col-span-4 lg:col-start-2 lg:row-start-3',
  },
  {
    id: 'kubernetes',
    icon: 'Boxes',
    title: 'Kubernetes Control Plane',
    summary: 'Services scale cleanly with rolling deployments and self-healing.',
    detail:
      'Kubernetes coordinates pods, balances traffic, and preserves uptime during updates through controlled rollouts and recovery.',
    layoutClass: 'lg:col-span-4 lg:col-start-8 lg:row-start-3',
  },
]

export const projects = [
  {
    id: 'pipeline',
    title: 'CI/CD Pipeline with GitHub Actions + AWS',
    description:
      'A release workflow that linted, tested, built, scanned, and deployed applications to AWS with rollback-aware health checks.',
    stack: ['GitHub Actions', 'AWS EC2', 'Docker', 'Nginx', 'Shell'],
    githubUrl: 'https://github.com/ashishpagare22',
    demoTitle: 'Release flow preview',
    demoDescription:
      'This preview simulates the path from source push to production verification with automated approvals and post-deploy validation.',
    demoSteps: [
      'Push to main triggers linting, test coverage, and image build jobs.',
      'Container artifacts are tagged, scanned, and pushed to the target registry.',
      'Deployment jobs update AWS infrastructure with health checks and smoke tests.',
      'Notifications confirm status while preserving rollback-ready artifacts.',
    ],
    demoMetrics: [
      { label: 'Lead time', value: 'Minutes, not hours' },
      { label: 'Release style', value: 'Health-checked rollout' },
      { label: 'Confidence layer', value: 'Tests + smoke checks' },
    ],
    demoSnippet: [
      'workflow_dispatch -> lint -> build -> scan -> deploy',
      'docker push ghcr.io/ashish/cloud-app:main',
      'ec2 health check returned 200 OK',
    ],
  },
  {
    id: 'dockerized',
    title: 'Dockerized Full Stack Deployment',
    description:
      'A container-first deployment strategy for a multi-service application with clean separation between frontend, API, and web server layers.',
    stack: ['Docker', 'React', 'Node.js', 'AWS', 'Nginx'],
    githubUrl: 'https://github.com/ashishpagare22',
    demoTitle: 'Container topology preview',
    demoDescription:
      'The demo view shows how services are packaged, exposed, and routed through a hardened edge layer for reliable deployments.',
    demoSteps: [
      'Frontend and API services are split into isolated containers.',
      'Nginx handles routing, compression, and reverse proxy duties.',
      'Environment-aware builds maintain parity between local and cloud.',
      'Deployment scripts start, verify, and recover the stack predictably.',
    ],
    demoMetrics: [
      { label: 'Packaging', value: 'Reusable images' },
      { label: 'Runtime shape', value: 'Multi-service stack' },
      { label: 'Edge handling', value: 'Nginx reverse proxy' },
    ],
    demoSnippet: [
      'docker compose up -d web api reverse-proxy',
      'nginx: upstream api is healthy',
      'frontend served with gzip + cache headers',
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring System with Prometheus + Grafana',
    description:
      'An observability layer for runtime metrics, alerting thresholds, and dashboard storytelling around service health and latency.',
    stack: ['Prometheus', 'Grafana', 'Alertmanager', 'Node Exporter', 'Linux'],
    githubUrl: 'https://github.com/ashishpagare22',
    demoTitle: 'Observability preview',
    demoDescription:
      'This walkthrough highlights how telemetry flows from exporters into dashboards and actionable alerts for faster diagnosis.',
    demoSteps: [
      'Exporters collect host, container, and service metrics continuously.',
      'Prometheus scrapes targets and records alerting rules for risk thresholds.',
      'Grafana visualizes latency, saturation, and deployment health in one place.',
      'Alert routing sends actionable notifications before incidents expand.',
    ],
    demoMetrics: [
      { label: 'Signal source', value: 'Prometheus exporters' },
      { label: 'Dashboard layer', value: 'Grafana panels' },
      { label: 'Alerting mode', value: 'Threshold + trend' },
    ],
    demoSnippet: [
      'prometheus target status: all jobs healthy',
      'grafana dashboard refreshed with 15s scrape interval',
      'alertmanager route ready for service degradation events',
    ],
  },
]

export const terminalLines = [
  {
    type: 'command',
    text: 'ashish@cloud-shell:~$ docker build -t ashish-cloud-portfolio:prod .',
  },
  {
    type: 'output',
    text: '[+] Building 23.4s (18/18) FINISHED -> image sha256:7d9ce42f4a2b',
  },
  {
    type: 'command',
    text: 'ashish@cloud-shell:~$ docker run -d -p 80:80 ashish-cloud-portfolio:prod',
  },
  {
    type: 'output',
    text: '1f30a9fbf893 | container started | nginx ready on port 80',
  },
  {
    type: 'command',
    text: 'ashish@cloud-shell:~$ kubectl rollout status deployment/portfolio-ui',
  },
  {
    type: 'success',
    text: 'deployment "portfolio-ui" successfully rolled out and passed readiness checks',
  },
]

export const skillGroups = [
  {
    title: 'Cloud',
    icon: 'Cloud',
    description: 'Services and practices for building secure, reliable cloud foundations.',
    items: [
      { name: 'AWS EC2', icon: 'Server' },
      { name: 'Amazon S3', icon: 'Database' },
      { name: 'IAM', icon: 'ShieldCheck' },
    ],
  },
  {
    title: 'DevOps',
    icon: 'Workflow',
    description: 'Automation, orchestration, and delivery systems that keep releases moving.',
    items: [
      { name: 'Docker', icon: 'Package' },
      { name: 'Kubernetes', icon: 'Boxes' },
      { name: 'CI/CD', icon: 'GitBranch' },
    ],
  },
  {
    title: 'Tools',
    icon: 'Terminal',
    description: 'Supporting tools that harden deployments, observability, and daily operations.',
    items: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'Linux', icon: 'Terminal' },
      { name: 'Nginx', icon: 'Globe' },
    ],
  },
]

export const aboutHighlights = [
  {
    title: 'Cloud-first delivery',
    icon: 'Layers',
    description:
      'I design systems around deployment flow, resilience, and the practical realities of running software in cloud environments.',
  },
  {
    title: 'Automation mindset',
    icon: 'Waypoints',
    description:
      'Manual steps are treated as opportunities for scripts, pipelines, and repeatable infrastructure patterns that scale cleanly.',
  },
  {
    title: 'Observability by default',
    icon: 'Gauge',
    description:
      'I care about the feedback loop after deploy just as much as the release itself, so logs, metrics, and alerts stay part of the plan.',
  },
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'ashishpagare2210@gmail.com',
    href: 'mailto:ashishpagare2210@gmail.com',
    icon: 'Mail',
  },
  {
    label: 'GitHub',
    value: 'github.com/ashishpagare22',
    href: 'https://github.com/ashishpagare22',
    icon: 'GitBranch',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashish-pagare-4633322a8',
    href: 'https://linkedin.com/in/ashish-pagare-4633322a8',
    icon: 'Globe',
    external: true,
  },
  {
    label: 'Resume',
    value: 'Download CV',
    href: '/Ashish_Pagare_CV.pdf',
    icon: 'Download',
    download: true,
  },
]
