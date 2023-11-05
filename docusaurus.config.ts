// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: 'Busy Hour',
  tagline:
    'Built-in in-app messaging, video & audio calls, and activity feeds wihout headaches.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.busyhour.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'busyhour', // Usually your GitHub org/user name.
  projectName: 'busy-hour-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Busy Hour',
        logo: {
          alt: 'Busy Hour Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'React',
                to: '/docs/react',
              },
              {
                label: 'React Native',
                to: '/docs/react-native',
              },
              {
                label: 'Node.js',
                to: '/docs/nodejs',
              },
              {
                label: 'More',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/busyhourcare',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Dashboard',
                href: 'https://busyhour.id/dashboard',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/busy-hour-studio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Busy Hour. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
} satisfies Config;

module.exports = config;