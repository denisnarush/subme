const PROJECTS = [
  {
    title: 'flowers',
    i18n: {
      locales: ['ru'],
    },
  },
  {
    title: 'flowers-e2e',
    prefix: null,
    styles: null,
    build: null,
    serve: null,
    i18n: null,
    test: null,
    stylePreprocessorOptions: null,
    e2e: { target: 'flowers' },
    lint: { options: { lintFilePatterns: ['apps/flowers-e2e/**/*.{js,ts}'] } },
    implicitDependencies: ['flowers'],
  },
  {
    title: 'api',
    prefix: 'api',
    styles: null,
    stylePreprocessorOptions: null,
    build: {
      builder: '@nrwl/node:webpack',
      outputs: ['{options.outputPath}'],
      options: {
        index: null,
        polyfills: null,
        aot: null,
        buildOptimizer: null,
        budgets: null,
        scripts: null,
        vendorChunk: null,
        extractLicenses: null,
        sourceMap: null,
        namedChunks: null,
      },
      configurations: {
        production: {
          outputHashing: null,
          sourceMap: null,
          namedChunks: null,
          vendorChunk: null,
          inspect: false,
        },
        development: {
          localize: null,
        },
      },
      defaultConfiguration: null,
    },
    serve: {
      builder: '@nrwl/node:node',
      options: {
        buildTarget: 'api:build',
      },
      configurations: null,
      defaultConfiguration: null,
    },
    lint: {
      options: {
        lintFilePatterns: ['apps/api/**/*.ts'],
      },
    },
    i18n: null,
  },
];

module.exports = {
  PROJECTS,
};
