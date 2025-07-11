import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PagCrypto Docs',
  tagline: 'Infraestrutura de Pagamentos Web3 que conecta stablecoins a pagamentos em moeda local',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },
  url: 'https://docs.pagcrypto.finance',
  baseUrl: '/',
  organizationName: 'PagCrypto', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/PagCrypto/docs.pagcrypto.finance',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/PagCrypto/docs.pagcrypto.finance',
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PagCrypto',
      logo: {
        alt: 'Logo PagCrypto',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentos',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://pagcrypto.finance',
          label: 'Site',
          position: 'right',
        },
        {
          href: 'https://github.com/PagCrypto/docs.pagcrypto.finance',
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
              label: 'Perguntas Frequêntes',
              to: '/docs/faq/intro',
            },
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/vhvXnKuARg',
            },
            {
              label: 'X',
              href: 'https://x.com/PagCryptoFi',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/pagcryptofi',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/pagcrypto',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/pagcrypto',
            },
            {
              label: 'Github',
              href: 'https://github.com/PagCrypto',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              href: 'https://pagcrypto.finance',
              label: 'Site',
            },
            {
              href: 'https://github.com/PagCrypto/docs.pagcrypto.finance',
              label: 'GitHub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PagCrypto - Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
