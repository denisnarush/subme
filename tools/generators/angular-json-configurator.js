const fs = require('fs');
const prettier = require('prettier');

const ANGULAR_JSON = {
  version: 1,
  // HERE COMES ALL PROJECTS, GROUPS, COMPONNETS and etc.
  projects: {},
};
const PREFIX = 's';

const PROJECT_BUILD = (project) => {
  if (project.build === null) {
    return undefined;
  }

  const {
    title: projectName,
    stylePreprocessorOptions = {
      includePaths: ['libs/theme/src/lib/-mixins', 'libs/theme/src/lib/default'],
    },
    styles = ['libs/theme/src/lib/theme.styles.less'],
  } = project;

  const { build = {}, i18n = {} } = project;
  const {
    builder = '@angular-devkit/build-angular:browser',
    outputs,
    configurations = {},
    defaultConfiguration = 'development',
  } = build;

  let { options = {} } = build;
  options = {
    ...{
      vendorChunk: true,
      extractLicenses: false,
      sourceMap: true,
      namedChunks: true,
    },
    ...options,
  };

  const {
    index = `apps/${projectName}/src/index.html`,
    polyfills = `apps/${projectName}/src/polyfills.ts`,
    aot = true,
    buildOptimizer = true,
    optimization = true,
    budgets = [
      {
        type: 'initial',
        maximumWarning: '2mb',
        maximumError: '5mb',
      },
      {
        type: 'anyComponentStyle',
        maximumWarning: '6kb',
        maximumError: '10kb',
      },
    ],
    scripts = [],
  } = options;

  let { production = {}, development = {} } = configurations;
  production = {
    ...{
      localize: ['en'],
      extractLicenses: true,
      sourceMap: false,
      namedChunks: false,
    },
    ...production,
  };

  development = {
    ...{ localize: ['en'] },
    ...development,
  };

  const {
    outputHashing = 'all',
    inspect,
    fileReplacements = [
      {
        replace: `apps/${projectName}/src/environments/environment.ts`,
        with: `apps/${projectName}/src/environments/environment.prod.ts`,
      },
    ],
  } = production;

  return {
    builder: builder,
    outputs: outputs,
    options: {
      outputPath: `dist/apps/${projectName}`,
      // <base href="{project base href}/{lolace base href}"/>
      baseHref: '/', // project base href
      index: index || undefined,
      main: `apps/${projectName}/src/main.ts`,
      polyfills: polyfills || undefined,
      tsConfig: `apps/${projectName}/tsconfig.app.json`,
      localize: i18n !== null ? ['en', ...i18n.locales] : undefined,
      aot: aot || undefined,
      buildOptimizer: buildOptimizer || undefined,
      optimization: optimization !== null ? optimization : undefined,
      budgets: budgets || undefined,
      assets: [
        {
          glob: '**/*',
          input: 'assets',
          output: 'assets',
        },
      ],
      stylePreprocessorOptions: stylePreprocessorOptions || undefined,
      styles: styles || undefined,
      scripts: scripts || undefined,
      vendorChunk: options.vendorChunk !== null ? options.vendorChunk : undefined,
      extractLicenses:
        options.extractLicenses !== null ? options.extractLicenses : undefined,
      sourceMap: options.sourceMap !== null ? options.sourceMap : undefined,
      namedChunks: options.namedChunks !== null ? options.namedChunks : undefined,
    },
    // BUILD CONFIGURATIONS
    configurations: {
      production: {
        localize: development.localize !== null ? development.localize : undefined,
        extractLicenses:
          production.extractLicenses !== null ? production.extractLicenses : undefined,
        outputHashing: outputHashing !== null ? outputHashing : undefined,
        sourceMap: production.sourceMap !== null ? production.sourceMap : undefined,
        namedChunks: production.namedChunks !== null ? production.namedChunks : undefined,
        inspect: inspect,
        fileReplacements: fileReplacements,
      },
      development: {
        localize: development.localize !== null ? development.localize : undefined,
      },
    },
    defaultConfiguration:
      defaultConfiguration !== null ? defaultConfiguration : undefined,
  };
};

const PROJECT_SERVE = (project) => {
  if (project.serve === null) {
    return undefined;
  }

  const { title: projectName, serve = {} } = project;
  const {
    builder = '@angular-devkit/build-angular:dev-server',
    options,
    configurations = {
      production: {
        browserTarget: `${projectName}:build:production`,
      },
      development: {
        browserTarget: `${projectName}:build:development`,
      },
    },
    defaultConfiguration = 'development',
  } = serve;

  return {
    builder: builder,
    options: options || undefined,
    // SERVE CONFIGURATIONS
    configurations: configurations || undefined,
    defaultConfiguration:
      defaultConfiguration !== null ? defaultConfiguration : undefined,
  };
};

const PROJECT_E2E = (project) => {
  if (!project.e2e) {
    return undefined;
  }

  const { title: projectName, e2e } = project;
  const { target } = e2e;

  return {
    builder: '@nrwl/cypress:cypress',
    options: {
      cypressConfig: `apps/${projectName}/cypress.json`,
      tsConfig: `apps/${projectName}/tsconfig.e2e.json`,
      devServerTarget: `${target}:serve`,
    },
    configurations: {
      production: {
        devServerTarget: `${target}:serve:production`,
      },
    },
  };
};

const PROJECT_I18N = (project) => {
  if (project.i18n === null) {
    return undefined;
  }

  const { i18n = {} } = project;
  const { locales: projectLocales = [] } = i18n;

  const locales = {};

  projectLocales.forEach(
    (locale) =>
      (locales[locale] = {
        translation: `i18n/locale/source.${locale}.xlf`,
        // https://angular.io/guide/i18n#deploy-multiple-locales
        // <base href="{project base href}/{lolace base href}"/>
        baseHref: `/${locale}/`, // locale base href
      })
  );

  return {
    sourceLocale: 'en',
    locales,
  };
};

const PROJECT_EXTRACT_I18N = (project) => {
  if (project.i18n === null) {
    return undefined;
  }

  const { title: projectName } = project;

  return {
    builder: '@angular-devkit/build-angular:extract-i18n',
    options: {
      browserTarget: `${projectName}:build`,
      outputPath: `i18n`,
      outFile: `source.xlf`,
    },
  };
};

const PROJECT_LINT = (project) => {
  if (project.lint === null) {
    return undefined;
  }

  const { title: projectName, lint = {} } = project;

  const { options = {} } = lint;

  const {
    lintFilePatterns = [
      `apps/${projectName}/src/**/*.ts`,
      `apps/${projectName}/src/**/*.html`,
    ],
  } = options;

  return {
    builder: '@nrwl/linter:eslint',
    options: {
      lintFilePatterns: lintFilePatterns,
    },
  };
};

const PROJECT_TEST = (project) => {
  if (project.test === null) {
    return undefined;
  }

  const { title: projectName } = project;

  return {
    builder: '@nrwl/jest:jest',
    options: {
      jestConfig: `apps/${projectName}/jest.config.js`,
      passWithNoTests: true,
    },
    outputs: [`coverage/apps/${projectName}`],
  };
};

const PROJECT_STORYBOOK = (project) => {
  if (!project.storybook) {
    return undefined;
  }

  const { title: projectName, storybook } = project;

  return {
    storybook: {
      builder: '@nrwl/storybook:storybook',
      options: {
        uiFramework: '@storybook/angular',
        port: 4400,
        config: {
          configFolder: `${storybook.folder}/${projectName}/.storybook`,
        },
      },
      configurations: {
        ci: {
          quiet: true,
        },
      },
    },
    'build-storybook': {
      builder: '@nrwl/storybook:build',
      outputs: ['{options.outputPath}'],
      options: {
        uiFramework: '@storybook/angular',
        outputPath: `dist/storybook/${projectName}`,
        config: {
          configFolder: `${storybook.folder}/${projectName}/.storybook`,
        },
      },
      configurations: {
        ci: {
          quiet: true,
        },
      },
    },
  };
};

const PROJECT_STRUCTURE = (project) => {
  const { title: projectName, prefix = PREFIX, implicitDependencies } = project;

  ANGULAR_JSON.projects[projectName] = {
    projectType: 'application',
    root: `apps/${projectName}`,
    sourceRoot: `apps/${projectName}/src`,
    prefix: prefix !== null ? prefix : undefined,
    i18n: PROJECT_I18N(project),
    architect: {
      build: PROJECT_BUILD(project),
      serve: PROJECT_SERVE(project),
      e2e: PROJECT_E2E(project),
      'extract-i18n': PROJECT_EXTRACT_I18N(project),
      lint: PROJECT_LINT(project),
      test: PROJECT_TEST(project),
    },
    tags: [],
    implicitDependencies: implicitDependencies || undefined,
  };
};

const GROUP_STRUCTURE = (group) => {
  const { title: projectName, prefix = PREFIX } = group;

  ANGULAR_JSON.projects[projectName] = {
    projectType: 'library',
    root: `libs/${projectName}`,
    sourceRoot: `libs/${projectName}/src`,
    prefix: prefix,
    architect: {
      storybook: PROJECT_STORYBOOK(group)
        ? PROJECT_STORYBOOK(group).storybook
        : undefined,
      'build-storybook': PROJECT_STORYBOOK(group)
        ? PROJECT_STORYBOOK(group)['build-storybook']
        : undefined,
    },
    tags: [],
  };
};

const COMPONENT_STRUCTURE = (component) => {
  const { title: projectName, folder: root, prefix = PREFIX } = component;

  ANGULAR_JSON.projects[projectName] = {
    projectType: 'library',
    root: `libs/${root}`,
    sourceRoot: `libs/${root}/src`,
    prefix: prefix,
    architect: {
      lint: {
        builder: '@nrwl/linter:eslint',
        options: {
          lintFilePatterns: [`libs/${root}/src/**/*.ts`, `libs/${root}/src/**/*.html`],
        },
      },
      test: {
        builder: '@nrwl/jest:jest',
        options: {
          jestConfig: `libs/${root}/jest.config.js`,
          passWithNoTests: true,
        },
      },
    },
    tags: [],
  };
};

// PROJECTS
[
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
      builder: '@nrwl/node:build',
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
      builder: '@nrwl/node:execute',
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
].forEach(PROJECT_STRUCTURE);

// GROUPS
[
  {
    title: 'theme',
  },
  {
    title: 'ui',
    storybook: {
      folder: 'libs',
    },
  },
].forEach(GROUP_STRUCTURE);

// COMPONENTS
[
  {
    title: 'shared-directives',
    folder: 'shared/directives',
  },
  {
    title: 'shared-pages-feature-not-found',
    folder: 'shared/pages/feature-not-found',
  },
  {
    title: 'shared-pages-feature-confirmed',
    folder: 'shared/pages/feature-confirmed',
  },
  {
    title: 'flowers-pages-feature-home',
    folder: 'flowers/pages/feature-home',
  },
  {
    title: 'flowers-pages-feature-about',
    folder: 'flowers/pages/feature-about',
  },
  {
    title: 'flowers-pages-feature-payment-confirmed',
    folder: 'flowers/pages/feature-payment-confirmed',
  },
  {
    title: 'flowers-pages-feature-delivery-reschedule-confirmed',
    folder: 'flowers/pages/feature-delivery-reschedule-confirmed',
  },
  {
    title: 'flowers-pages-feature-delivery-confirmed',
    folder: 'flowers/pages/feature-delivery-confirmed',
  },
  {
    title: 'flowers-pages-feature-dashboard',
    folder: 'flowers/pages/feature-dashboard',
  },
  {
    title: 'flowers-pages-feature-order',
    folder: 'flowers/pages/feature-order',
  },
  {
    title: 'ui-ui-content',
    folder: 'ui/ui-content',
  },
  {
    title: 'ui-ui-header',
    folder: 'ui/ui-header',
  },
  {
    title: 'ui-ui-footer',
    folder: 'ui/ui-footer',
  },
  {
    title: 'ui-ui-modal',
    folder: 'ui/ui-modal',
  },
  {
    title: 'ui-ui-slider',
    folder: 'ui/ui-slider',
  },
  {
    title: 'ui-ui-tabs',
    folder: 'ui/ui-tabs',
  },
  {
    title: 'ui-ui-tab',
    folder: 'ui/ui-tab',
  },
  {
    title: 'ui-ui-fieldset',
    folder: 'ui/ui-fieldset',
  },
]
  .sort((a, b) => (a.title > b.title ? 1 : -1))
  .forEach(COMPONENT_STRUCTURE);

// PRINT
fs.writeFileSync(
  './angular.json',
  prettier.format(JSON.stringify(ANGULAR_JSON), { parser: 'json-stringify' }),
  'utf-8'
);

console.log('\x1b[32m%s\x1b[0m', 'Angular.json generated successfully.');
