/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'React & Redux with TypeScript', // Title for your website.
  tagline: 'A kickstart guide and Cookbook.',
  url: 'https://sandstorm.github.io', // Your website URL
  baseUrl: '/typescript-react-app-kickstart-guide/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'typescript-react-app-kickstart-guide',
  organizationName: 'sandstorm',

  customDocsPath: 'guide',
  docsUrl: 'guide',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'kickstart/create-boilerplate', label: 'Guide' },
    { href: 'https://github.com/sandstorm/typescript-react-app-kickstart-guide', label: 'GitHub' },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/avatar-inverted@2x.png',
  footerIcon: 'img/avatar-inverted@2x.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00AEEF',
    secondaryColor: '#005778',
  },

  /* Custom fonts for website */
  // TODO: sandstorm fonts
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  scrollToTop: true,
  docsSideNavCollapsible: false,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Sandstorm Media GmbH`,

  highlight: {
    theme: 'vs2015', // 'hopscotch',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/typescript-react-app-kickstart-guide/js/code-block-buttons.js',
  ],

  stylesheets: ['/typescript-react-app-kickstart-guide/css/code-block-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/sandstorm/typescript-react-app-kickstart-guide',
};

module.exports = siteConfig;
