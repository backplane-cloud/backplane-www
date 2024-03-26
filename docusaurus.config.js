// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Open Source Cloud Abstraction API",
  tagline: "For building Cloud Platforms",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://backplane.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "backplane-cloud", // Usually your GitHub org/user name.
  // projectName: "backplane-www", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/backplane-cloud/backplane-www/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/backplane-cloud/backplane-www/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-T08SLXXEZH",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/backplane-social-card.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      navbar: {
        title: "Backplane",
        logo: {
          alt: "Backplane Logo",
          src: "img/backplane-logo-blue.svg",
        },
        items: [
          // { to: "/blog/2024/01/04/about", label: "About", position: "left" },

          { to: "/howitworks", label: "How it works", position: "left" },
          // { to: "/casestudy", label: "Case Study", position: "left" },
          { to: "/roadmap", label: "Roadmap", position: "left" },

          // { to: "/features", label: "Features", position: "left" },
          // { to: "/investors", label: "Investors", position: "left" },
          // { to: "/showcase", label: "Showcase", position: "left" },

          // { to: "/community", label: "Community", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },

          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },

          {
            href: "https://api.backplane.dev/openapi/",
            label: "API",
            position: "right",
          },
          {
            href: "https://github.com/backplane-cloud/backplane-www",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://backplaneworkspace.slack.com",
            label: "Slack",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/backplane-software",
              },
              {
                label: "Slack",
                href: "https://backplaneworkspace.slack.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/backplane-cloud/backplane-www",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Backplane Software Ltd. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
