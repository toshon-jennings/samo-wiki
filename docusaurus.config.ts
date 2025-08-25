presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.js',
        // Temporarily disable docs to avoid parsing errors:
        include: [],
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
