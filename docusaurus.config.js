// @ts-check
// Docusaurus configuration file

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'e-aurum ',
  tagline: 'Complete Guide to e-aurum',
  favicon: 'img/eaurum.jpeg',

  url: 'https://your-docusaurus-site.com', // Replace with your actual website URL
  baseUrl: '/',

  organizationName: 'your-org', // Replace with your GitHub org/user
  projectName: 'e-aurum', // Replace with your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'e-aurum',
        logo: {
          alt: 'e-aurum Logo',
          src: 'img/eaurum.jpeg',
                  },
        items: [
          
        ],

        
      },
      
      

      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} e-aurum.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      
    }),
};

export default config;