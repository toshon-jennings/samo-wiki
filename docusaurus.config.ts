import type {Config} from "@docusaurus/types";

const config: Config = {
  title: "SAMO-WIKI",
  url: "https://toshon-jennings.github.io",
  baseUrl: "/samo-wiki/",
  favicon: "img/favicon.ico",
  organizationName: "toshon-jennings",
  projectName: "samo-wiki",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: { defaultLocale: "en", locales: ["en"] },
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: false
        },
        blog: false,
        pages: {}
      }
    ]
  ]
};

export default config;

