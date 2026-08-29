/**
 * Projects shown on the Open Source Projects page.
 *
 * A selection, not an inventory. Something earns a place here when it shows
 * what I've worked on or why it was interesting - not because it's recent,
 * popular, or still maintained.
 */
export interface Project {
  title: string
  description: string
  link: string
  category: CategoryId
}

/**
 * Groups follow the lines of work these projects actually came out of.
 */
export type CategoryId = 'editor' | 'linux' | 'php' | 'windows' | 'odds-and-ends'

export interface Category {
  id: CategoryId
  name: string
  description: string
}

export const categories: Category[] = [
  {
    id: 'editor',
    name: 'Inside the Editor',
    description: "Most of what I've built lives in VS Code. These are the ones worth pointing at.",
  },
  {
    id: 'linux',
    name: 'On Linux',
    description:
      'Newer ground for me: Debian, defaults, and deciding what actually belongs on a machine.',
  },
  {
    id: 'php',
    name: 'The PHP Years',
    description: 'Where I started. PHP, Moodle, and frameworks that never got much tooling.',
  },
  {
    id: 'windows',
    name: 'When Windows Broke',
    description: 'Years of IT support left me with scripts for the days something is badly broken.',
  },
  {
    id: 'odds-and-ends',
    name: 'Odds and Ends',
    description: "Things that don't group with anything else.",
  },
]

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // Inside the Editor
  // ─────────────────────────────────────────────

  {
    title: 'Weave Context',
    description:
      "Markdown notes that behave like code. Wikilinks become real editor symbols, so Go to Definition, Find References and Rename work across your documentation instead of stopping at the file boundary. There's a desktop dashboard for looking at a repository as a graph, and CodeContext+, which pulls the same notes up next to the line of code they explain. This is what I've been thinking about most lately.",
    link: 'https://github.com/ManuelGil/vscode-weave-context',
    category: 'editor',
  },
  {
    title: 'JSON Flow',
    description:
      'Turns a JSON file into a graph you can pan around. I built it because I kept opening config files that were too nested to read from top to bottom.',
    link: 'https://github.com/ManuelGil/vscode-json-flow',
    category: 'editor',
  },
  {
    title: 'Auto Barrel',
    description:
      "Creates and updates barrel files so you don't have to. Someone else started it and I picked it up, which mostly means resisting the urge to redesign it for people who were already happy with it.",
    link: 'https://github.com/ManuelGil/vscode-auto-barrel',
    category: 'editor',
  },
  {
    title: 'T3 Stack / Next.js File Generator',
    description:
      "Scaffolds files for Next.js and T3 Stack projects - NextAuth, Prisma, tRPC. It exists because a new router shouldn't start by copying an old one.",
    link: 'https://github.com/ManuelGil/vscode-nextjs-generator',
    category: 'editor',
  },
  {
    title: 'NestJS Tooling',
    description:
      'Nine extensions for NestJS: a file generator built on the CLI, a snippets library, an extension pack, and snippets for Swagger, Prisma, TypeORM, Mongoose, MikroORM and Sequelize. They grew one at a time out of real NestJS work.',
    link: 'https://github.com/ManuelGil/vscode-nestjs-generator',
    category: 'editor',
  },
  {
    title: 'Angular File Generator',
    description:
      "Generates Angular files from the editor using the same schematics as the CLI, for the times you'd rather not leave the file tree.",
    link: 'https://github.com/ManuelGil/vscode-angular-generator',
    category: 'editor',
  },
  {
    title: 'CodeLog+',
    description:
      'Inserts, removes and highlights log statements across languages. CodeMark+ is its sibling, for TODO and FIXME comments. Small problems, but I run into them every day.',
    link: 'https://github.com/ManuelGil/vscode-code-log-plus',
    category: 'editor',
  },
  {
    title: 'Tooling for Extension Authors',
    description:
      'A starter kit for writing VS Code extensions, plus the pieces I needed around it: a library for querying the Marketplace, a CLI for installing extensions from npm, and a browser extension that adds a one-click VSIX download. Publish enough extensions and the tooling around publishing becomes its own project.',
    link: 'https://github.com/ManuelGil/vscode-extension-starter-advanced',
    category: 'editor',
  },

  // ─────────────────────────────────────────────
  // On Linux
  // ─────────────────────────────────────────────

  {
    title: 'Amonite',
    description:
      'A Debian-derived distribution built around one question: why should this exist by default? Every package and setting has to earn its place and still make sense thirty days in, not just on the day you install it. Its documentation lives in a separate vault of Markdown notes, which is my own wikilink habit turned into the project handbook.',
    link: 'https://github.com/ManuelGil/amonite',
    category: 'linux',
  },
  {
    title: 'Amonite Mobile',
    description:
      "The same idea pointed at a phone: a Debian image for arm64 devices with a touchscreen desktop and Android apps through Waydroid. Devices are described in files rather than patched into the image, so adding one is a new descriptor and not a new build. It boots in an emulator and hasn't been near real hardware yet, which the README says before anything else.",
    link: 'https://github.com/ManuelGil/amonite-mobile',
    category: 'linux',
  },
  {
    title: 'Cedra',
    description:
      'A GTK app for Debian workstations. APT tells you which package to install; Cedra deals with what the machine should actually do with it - Git defaults, browser policies, desktop handlers, fonts - and shows you the changes before applying them.',
    link: 'https://github.com/ManuelGil/cedra',
    category: 'linux',
  },

  // ─────────────────────────────────────────────
  // The PHP Years
  // ─────────────────────────────────────────────

  {
    title: 'CodeIgniter 4 Tooling',
    description:
      'Commands and snippets for CodeIgniter 4, plus boilerplates pairing it with Blade, Twig and Mustache, and a smaller set for KumbiaPHP. Neither framework gets much editor tooling, which is most of why I wrote it.',
    link: 'https://github.com/ManuelGil/vscode-codeigniter4-spark',
    category: 'php',
  },
  {
    title: 'Moodle Pack',
    description:
      "Snippets and commands for Moodle plugin development, across PHP, XML and Mustache. A lot of my early work was Moodle work, and it's a corner of the ecosystem with very few tools in it.",
    link: 'https://github.com/ManuelGil/vscode-moodle-snippets',
    category: 'php',
  },
  {
    title: 'REST API with Slim',
    description:
      "A REST API on Slim 3 and MySQL, from 2017. It's archived now, but it got forked plenty, which suggests people used it the way I hoped: as something to read before writing their own.",
    link: 'https://github.com/ManuelGil/REST-Api-with-Slim-PHP',
    category: 'php',
  },
  {
    title: 'Simple Social Network',
    description:
      "A small social network in PHP, MySQL, Bootstrap 3 and Vue 2. Very much of its time, and archived, but it's the clearest record I have of what I was building before any of the tooling work started.",
    link: 'https://github.com/ManuelGil/Simple-Social-Network',
    category: 'php',
  },

  // ─────────────────────────────────────────────
  // When Windows Broke
  // ─────────────────────────────────────────────

  {
    title: 'Reset Windows Update Tool',
    description:
      "Repairs Windows Update when it breaks and the usual advice doesn't help. It started as a batch script in 2017 and turned into a small suite with its own site and documentation. This repository is archived; the scripts and the site carry on under their own organisation. It's still the most-used thing I've made.",
    link: 'https://github.com/ManuelGil/Reset-Windows-Update-Tool',
    category: 'windows',
  },
  {
    title: 'Uninstall Office 2016',
    description:
      'Removes an Office install when the official uninstaller gives up. Written during years of IT support, for the specific afternoon where nothing else works.',
    link: 'https://github.com/ManuelGil/Uninstall-Office-2016',
    category: 'windows',
  },

  // ─────────────────────────────────────────────
  // Odds and Ends
  // ─────────────────────────────────────────────

  {
    title: 'nspin',
    description:
      "A terminal spinner with no dependencies, built on what Node already gives you. There are ESM and Bun ports as well. It's a tiny thing, but writing one properly is a good exercise in not reaching for a package.",
    link: 'https://github.com/ManuelGil/nspin',
    category: 'odds-and-ends',
  },
  {
    title: 'Git and GitHub Workshop',
    description:
      "Materials from a Git and GitHub workshop I ran for the Paradigma Indie community, in Spanish, with a video playlist alongside it. Not software, but it's some of the open source work I'm most glad I did.",
    link: 'https://github.com/ManuelGil/taller-git-y-github',
    category: 'odds-and-ends',
  },
]
