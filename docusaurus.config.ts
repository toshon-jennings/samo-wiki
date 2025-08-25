presets: [
  [
    'classic',
    {
      docs: {
  sidebarPath: './sidebars.js',
  // Skip the 3 files that are breaking the build (fix later)
  exclude: [
    '**/Online-Editors.md',
    '**/💼-Portfolio.md',
    '**/📓-Journal.md',
  ],
},

      blog: {
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl:
          'https://github.com/toshon-jennings/samo-wiki/tree/main/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
],
