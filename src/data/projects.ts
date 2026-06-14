/**
 * Represents a project as something that exists and has been carried over time.
 * This is not a product model and does not imply support or active maintenance.
 */
export interface Project {
  title: string
  description: string
  link: string
  details: string[]
  category: string
  tech?: string[]
}

/**
 * Categories are descriptive, not promises of activity.
 */
export interface Category {
  id: string
  name: string
  description: string
}

export const categories: Category[] = [
  {
    id: 'vscode',
    name: 'VSCode Extensions',
    description:
      'Extensions created for Visual Studio Code over time. Some are active, some are stable, some are slow or paused. Attention varies and is not guaranteed.',
  },
  {
    id: 'npm',
    name: 'NPM Packages & CLI Tools',
    description:
      'Small Node.js packages and CLI tools published to solve specific problems. Many remain minimal and unchanged once stable.',
  },
  {
    id: 'windows',
    name: 'Windows Utilities',
    description:
      'Utilities created to solve real Windows problems in IT and sysadmin contexts. These tools exist because something was broken.',
  },
  {
    id: 'php',
    name: 'PHP Tools & Projects',
    description:
      'PHP-related tools and boilerplates created at different points in time. Many exist as reference implementations or practical utilities.',
  },
  {
    id: 'browser',
    name: 'Browser Extensions',
    description:
      'Small browser extensions created to remove friction in specific workflows.',
  },
]

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // VSCode Extensions
  // ─────────────────────────────────────────────

  {
    title: 'JSON Flow',
    description:
      'A VSCode extension for exploring and visualizing complex JSON structures. Created to solve a real problem. Activity varies.',
    details: [
      'Visual exploration of nested data',
      'Trade-offs between clarity and performance',
      'Changed over time based on use',
    ],
    link: 'https://github.com/ManuelGil/vscode-json-flow',
    category: 'vscode',
    tech: ['TypeScript', 'VSCode API'],
  },
  {
    title: 'Auto Barrel',
    description:
      'A VSCode extension originally created by someone else and later continued. Focused on reducing friction around barrel files while preserving its original identity.',
    details: [
      'Continuation of an existing project',
      'Stability over constant change',
      'Respect for prior users and workflows',
    ],
    link: 'https://github.com/ManuelGil/vscode-auto-barrel',
    category: 'vscode',
  },
  {
    title: 'Astro File Generator',
    description:
      'A small extension to scaffold files for Astro projects. Created as an experiment around DX and structure.',
    details: [
      'Exploration of Astro workflows',
      'Lightweight by design',
      'May evolve or remain as-is',
    ],
    link: 'https://github.com/ManuelGil/vscode-astro-generator',
    category: 'vscode',
  },
  {
    title: 'Angular File Generator',
    description:
      'A file generator extension for Angular projects, created to enforce structure and reduce repetitive setup.',
    details: [
      'Opinionated structure',
      'Built for personal workflows',
      'Kept stable once usable',
    ],
    link: 'https://github.com/ManuelGil/vscode-angular-generator',
    category: 'vscode',
  },
  {
    title: 'NestJS File Generator',
    description:
      'A generator for NestJS projects focused on consistency and reducing manual file creation.',
    details: [
      'Structure-first approach',
      'Based on personal conventions',
      'Not intended as a universal solution',
    ],
    link: 'https://github.com/ManuelGil/vscode-nestjs-generator',
    category: 'vscode',
  },
  {
    title: 'VueJS File Generator',
    description:
      'A VSCode extension to generate files and components for VueJS projects.',
    details: [
      'Structure-oriented',
      'Created to reduce repetition',
      'Scope limited to VueJS workflows',
    ],
    link: 'https://github.com/ManuelGil/vscode-vuejs-generator',
    category: 'vscode',
  },
  {
    title: 'NestJS Snippets',
    description:
      'A collection of NestJS snippets for VSCode, created to reduce boilerplate.',
    details: [
      'Editor-level shortcuts',
      'Low surface area',
      'Minimal expectations',
    ],
    link: 'https://github.com/ManuelGil/vscode-nestjs-snippets',
    category: 'vscode',
  },
  {
    title: 'NestJS Swagger Snippets',
    description:
      'Snippets for writing Swagger/OpenAPI definitions in NestJS projects.',
    details: [
      'Focused on repetitive patterns',
      'Documentation-oriented',
      'Exists as a helper, not a framework',
    ],
    link: 'https://github.com/ManuelGil/vscode-nestjs-swagger-snippets',
    category: 'vscode',
  },
  {
    title: 'NestJS MikroORM Snippets',
    description:
      'Snippets to assist with MikroORM usage in NestJS projects.',
    details: [
      'ORM-specific helpers',
      'Created for real projects',
      'Stable once functional',
    ],
    link: 'https://github.com/ManuelGil/vscode-nestjs-mikroorm-snippets',
    category: 'vscode',
  },
  {
    title: 'CodeLog+',
    description:
      'A VSCode extension to insert and manage log statements across different languages.',
    details: [
      'Debugging-focused',
      'Workflow-oriented',
      'Created to reduce manual effort',
    ],
    link: 'https://github.com/ManuelGil/vscode-code-log-plus',
    category: 'vscode',
  },
  {
    title: 'CodeMark+',
    description:
      'A VSCode extension to insert and highlight custom code comments.',
    details: [
      'Navigation aid',
      'Low complexity',
      'Built for personal workflows',
    ],
    link: 'https://github.com/ManuelGil/vscode-code-mark-plus',
    category: 'vscode',
  },
  {
    title: 'Moodle Pack',
    description:
      'A set of VSCode tools and snippets for Moodle development.',
    details: [
      'Education-focused',
      'Created for real Moodle work',
      'Scope limited to Moodle development',
    ],
    link: 'https://github.com/ManuelGil/vscode-moodle-snippets',
    category: 'vscode',
  },

  // ─────────────────────────────────────────────
  // NPM / CLI
  // ─────────────────────────────────────────────

  {
    title: 'vscode-marketplace-client',
    description:
      'A Node.js client to interact with the VSCode Marketplace API.',
    details: [
      'API wrapper',
      'Created to automate internal tooling',
      'Scope limited to marketplace data',
    ],
    link: 'https://github.com/ManuelGil/vscode-marketplace-client',
    category: 'npm',
    tech: ['Node.js'],
  },
  {
    title: 'vscplugit',
    description:
      'A CLI tool to install or uninstall VSCode extensions from NPM.',
    details: [
      'Automation-oriented',
      'Built for repeatable workflows',
      'Exists as a utility',
    ],
    link: 'https://github.com/ManuelGil/vscplugit',
    category: 'npm',
  },
  {
    title: 'nspin',
    description:
      'A minimal Node.js spinner utility for terminal applications.',
    details: [
      'Minimal surface area',
      'Focused on UX',
      'Stable once functional',
    ],
    link: 'https://github.com/ManuelGil/nspin',
    category: 'npm',
  },
  {
    title: 'nspin-esm',
    description:
      'A lightweight spinner utility built for native ESM environments.',
    details: [
      'ESM-first',
      'Minimal implementation',
      'Designed to stay small',
    ],
    link: 'https://github.com/ManuelGil/nspin-esm',
    category: 'npm',
  },
  {
    title: 'nspin-bun',
    description:
      'A spinner utility adapted for Bun environments.',
    details: [
      'Bun-specific experiment',
      'Minimal scope',
      'Exists as an adaptation, not a rewrite',
    ],
    link: 'https://github.com/ManuelGil/nspin-bun',
    category: 'npm',
  },

  // ─────────────────────────────────────────────
  // Windows Utilities
  // ─────────────────────────────────────────────

  {
    title: 'Reset Windows Update Tool',
    description:
      'A Windows utility created to repair broken Windows Update components. Carried forward because people still rely on it.',
    details: [
      'Created for a real and recurring problem',
      'Carries weight due to its nature',
      'Changes are made carefully, if at all',
    ],
    link: 'https://github.com/ManuelGil/Reset-Windows-Update-Tool',
    category: 'windows',
  },
  {
    title: 'Reset WSUS Client ID',
    description:
      'A script to reset the WSUS client identifier in Windows environments.',
    details: [
      'Enterprise-focused utility',
      'Created for troubleshooting',
      'Exists for specific failure cases',
    ],
    link: 'https://github.com/wureset-tools/reset-wsus-client-id',
    category: 'windows',
  },
  {
    title: 'Uninstall Office 2016',
    description:
      'A batch-based utility to fully remove Office installations when standard uninstall paths fail.',
    details: [
      'Failure-recovery focused',
      'Created for IT environments',
      'Exists because defaults are insufficient',
    ],
    link: 'https://github.com/ManuelGil/uninstall-office-2016',
    category: 'windows',
  },

  // ─────────────────────────────────────────────
  // PHP Projects
  // ─────────────────────────────────────────────

  {
    title: 'Project Skeleton (PHP)',
    description:
      'A minimal PHP project skeleton created to avoid repeating the same setup across projects.',
    details: [
      'Opinionated baseline',
      'Reuse over reinvention',
      'Exists primarily as reference',
    ],
    link: 'https://github.com/ManuelGil/project-skeleton',
    category: 'php',
  },
  {
    title: 'CodeIgniter 4 with Blade',
    description:
      'A CodeIgniter 4 starter integrating the Blade template engine.',
    details: [
      'Template integration example',
      'Created to explore alternatives',
      'Exists as a starter reference',
    ],
    link: 'https://github.com/ManuelGil/ci4-blade',
    category: 'php',
  },
  {
    title: 'CodeIgniter 4 with Mustache',
    description:
      'A CodeIgniter 4 starter using Mustache templates.',
    details: [
      'Experiment around templating',
      'Minimal scope',
      'Kept as a reference',
    ],
    link: 'https://github.com/ManuelGil/ci4-mustache',
    category: 'php',
  },
  {
    title: 'CodeIgniter 4 with Twig',
    description:
      'A CodeIgniter 4 starter using Twig templates.',
    details: [
      'Template engine comparison',
      'Reference implementation',
      'Exists as reference, not as product',
    ],
    link: 'https://github.com/ManuelGil/ci4-twig',
    category: 'php',
  },

  // ─────────────────────────────────────────────
  // Browser Extensions
  // ─────────────────────────────────────────────

  {
    title: 'One-Click VSIX',
    description:
      'A browser extension to download VSCode VSIX files with a single click.',
    details: [
      'Solves a specific workflow problem',
      'Small scope by design',
      'Unchanged once functional',
    ],
    link: 'https://github.com/ManuelGil/chrome-one-click-vsix',
    category: 'browser',
  },
]

/**
 * Contributions are described without numbers or claims of regular activity.
 */
export const contributionData = [
  {
    title: 'Pull Requests & Reviews',
    description:
      'Occasional pull requests, reviews, and discussions in other open source projects when something felt worth fixing or improving.',
  },
  {
    title: 'Documentation',
    description:
      'Small documentation improvements made when context was missing or confusing.',
  },
  {
    title: 'Community Interaction',
    description:
      'Participation in issues and discussions without ongoing commitments or obligations.',
  },
]
