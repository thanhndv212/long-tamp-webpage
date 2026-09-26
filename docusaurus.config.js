// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LongTAMP',
  tagline: 'Long-horizon task and motion planning for multi-arm manipulation',
  favicon: 'img/favicon.svg',
  future: {v4: true},
  url: 'https://thanhndv212.github.io',
  baseUrl: '/long-tamp-webpage/',
  organizationName: 'thanhndv212', projectName: 'long-tamp-webpage', deploymentBranch: 'gh-pages', trailingSlash: false,
  onBrokenLinks: 'throw', markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}}, i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [['classic', {docs: {routeBasePath: '/', sidebarPath: './sidebars.js', editUrl: 'https://github.com/thanhndv212/long-tamp-webpage/tree/main/'}, blog: false, theme: {customCss: './src/css/custom.css'}}]],
  themeConfig: {
    image: 'img/social-card.svg', colorMode: {respectPrefersColorScheme: true},
    navbar: {title: 'LongTAMP', logo: {alt: 'LongTAMP mark', src: 'img/logo.svg'}, items: [
      {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
      {to: '/concepts/planning-pipeline', label: 'How it works', position: 'left'},
      {to: '/examples', label: 'Examples', position: 'left'},
      {href: 'https://github.com/thanhndv212/long-tamp', label: 'GitHub', position: 'right'},
      {href: 'https://thanhndv212.github.io/', label: 'About me', position: 'right'},
      {
        type: 'dropdown',
        label: 'More Research',
        position: 'right',
        items: [
          {label: 'SO-ARM — Full-stack Manipulation', href: 'https://thanhndv212.github.io/soarm-ws-webpage/'},
          {label: 'Figaroh — Robotic SysID Toolbox', href: 'https://thanhndv212.github.io/figaroh-plus-webpage/'},
          {label: 'Tiago — Mobile Manipulator Calibration', href: 'https://thanhndv212.github.io/tiago-calibration-webpage/'},
          {label: 'TALOS — Humanoid Calibration', href: 'https://thanhndv212.github.io/talos-calibration-webpage/'},
          {label: 'Walka RL — Bipedal Locomotion', href: 'https://thanhndv212.github.io/walka-rl-webpage/'},
        ],
      },
    ]},
    footer: {style: 'dark', links: [
      {title: 'Learn', items: [{label: 'Overview', to: '/'}, {label: 'Install', to: '/getting-started/installation'}, {label: 'Architecture', to: '/architecture'}]},
      {title: 'Project', items: [{label: 'Source code', href: 'https://github.com/thanhndv212/long-tamp'}, {label: 'HPP', href: 'https://humanoid-path-planner.github.io/hpp-doc/'}]},
    ], copyright: 'LongTAMP is open source under the MIT License. Website content is CC BY-SA 4.0.'},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
export default config;
