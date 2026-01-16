// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // =========================
  // Basic site identity
  // =========================
  title: 'Quantitative Proteomics Core',
  tagline: 'A Core Facility of Cancer Science Institute of Singapore (CSI), NUS',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  // =========================
  // Hosting config (safe defaults for local dev)
  // We'll adjust later for GitHub Pages / custom domain.
  // =========================
  url: 'https://csi-qpc.github.io',
  baseUrl: '/',
  organizationName: 'csi-qpc',
  projectName: 'csi-qpc.github.io',

  // These are only needed for GitHub Pages deployment.
  // Keep placeholders for now; we'll set properly when deploying.

  // During early setup, "warn" is less annoying than "throw".
  // You can switch back to 'throw' once stable.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // =========================
  // Preset: Docs-first portal
  // =========================
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // ✅ This makes Docs become the homepage (GeDaC-like)
          routeBasePath: '/',

          // ✅ IMPORTANT: you are using sidebars.ts, not sidebars.js
          sidebarPath: require.resolve('./sidebars.ts'),

          // ✅ Removes "Edit this page" (can add later if you host on GitHub)
          editUrl: undefined,
        },

        // ✅ Disable blog for now (keeps site clean)
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // =========================
  // Theme/UI config
  // =========================
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        // Top-left combined NUS + CSI logo
        logo: {
          alt: 'NUS + CSI',
          src: 'img/nus-csi.svg',
          href: '/',
          target: '_self',
        },

        // Text next to logo
        title: 'Quantitative Proteomics Core',

        items: [
          { to: '/', label: 'Welcome', position: 'right' },
          { to: '/collaborative-support', label: 'Collaborative Support', position: 'right' },
          { to: '/publications', label: 'Publications', position: 'right' },  
          { to: '/team', label: 'Our Team', position: 'right' },
          { to: '/contact', label: 'Contact', position: 'right' },
          { to: '/faqs', label: 'FAQs', position: 'right' },

        ],

      },


      // ✅ Clean footer like institutional sites (removes template "Docs/Community/More")
      footer: {
        style: 'light',
        links: [],
        copyright: `
          © ${new Date().getFullYear()} 
          Quantitative Proteomics Core (QPC), 
          <a href="https://www.csi.nus.edu.sg/" target="_blank" rel="noopener noreferrer">CSI Singapore</a>, 
          <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer">NUS</a>.
          <br />
          <a href="/for-collaborators">For Collaborators</a>
        `,
      },




      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
