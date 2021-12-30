// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'luma.gl',
  tagline: 'Web GPU APIs',
  url: 'https://luma.gl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'visgl', // Usually your GitHub org/user name.
  projectName: 'luma.gl', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'moduledocs',
        path: '../modules',
        /** Until we remove the classic theme which occupies 'docs' */
        routeBasePath: 'modules'
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'basedocs',
        path: '../docs',
        /** Until we remove the classic theme which occupies 'docs' */
        routeBasePath: 'doc'
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'luma.gl',
        logo: {
          alt: 'vis.gl Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            to: '/doc',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/doc/getting-started',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'https://medium.com/vis-gl', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/visgl/luma.gl',
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
                label: 'Tutorial',
                to: '../docs/README.md',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack workspace',
                href: 'https://join.slack.com/t/deckgl/shared_invite/zt-7oeoqie8-NQqzSp5SLTFMDeNSPxi7eg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'vis.gl blog (Medium)',
                href: 'https://medium.com/vis-gl',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/visgl/luma.gl',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Urban Computing Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
