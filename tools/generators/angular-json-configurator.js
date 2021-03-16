const fs = require('fs');
const prettier = require('prettier');

const ANGULAR_JSON = {
  version: 1,
  // HERE COMES ALL PROJECTS, GROUPS, COMPONNETS and etc.
  projects: {},
  cli: {
    defaultCollection: '@nrwl/angular',
  },
  schematics: {
    '@nrwl/angular': {
      application: {
        linter: 'eslint',
      },
      library: {
        linter: 'eslint',
      },
      'storybook-configuration': {
        linter: 'eslint',
      },
    },
    '@nrwl/workspace': {
      library: {
        linter: 'tslint',
      },
    },
    '@nrwl/cypress': {
      'cypress-project': {
        linter: 'tslint',
      },
    },
    '@nrwl/node': {
      application: {
        linter: 'tslint',
      },
      library: {
        linter: 'tslint',
      },
    },
    '@nrwl/nest': {
      application: {
        linter: 'tslint',
      },
      library: {
        linter: 'tslint',
      },
    },
    '@nrwl/express': {
      application: {
        linter: 'tslint',
      },
      library: {
        linter: 'tslint',
      },
    },
    '@nrwl/angular:application': {
      unitTestRunner: 'jest',
      e2eTestRunner: 'cypress',
    },
    '@nrwl/angular:library': {
      unitTestRunner: 'jest',
    },
    '@nrwl/angular:component': {
      style: 'less',
    },
  },
};
const PREFIX = 's';

const PROJECT_BUILD = (project) => {
  if (project.build === null) {
    return undefined;
  }

  const {
    title: projectName,
    stylePreprocessorOptions = {
      includePaths: [
        'libs/theme/src/lib/-mixins',
        'libs/theme/src/lib/default',
      ],
    },
    styles = ['libs/theme/src/lib/theme.styles.less'],
  } = project;

  const { build = {}, i18n = {} } = project;
  const {
    builder = '@angular-devkit/build-angular:browser',
    outputs,
    options = {},
    configurations = {},
  } = build;

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

  const { production = {} } = configurations;

  const {
    extractLicenses = true,
    outputHashing = 'all',
    sourceMap = false,
    namedChunks = false,
    vendorChunk = true,
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
      localize: i18n !== null ? ['en'] : undefined,
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
    },
    // BUILD CONFIGURATIONS
    configurations: {
      production: {
        localize: i18n !== null ? true : undefined,
        extractLicenses: extractLicenses,
        outputHashing: outputHashing !== null ? outputHashing : undefined,
        sourceMap: sourceMap !== null ? sourceMap : undefined,
        namedChunks: namedChunks !== null ? namedChunks : undefined,
        vendorChunk: vendorChunk !== null ? vendorChunk : undefined,
        inspect: inspect,
        fileReplacements: fileReplacements,
      },
    },
  };
};

const PROJECT_SERVE = (project) => {
  if (project.serve === null) {
    return undefined;
  }

  const { title: projectName, serve = {} } = project;
  const {
    builder = '@angular-devkit/build-angular:dev-server',
    options = {},
    configurations = {
      production: {
        browserTarget: `${projectName}:build:production`,
      },
    },
  } = serve;
  const { buildTarget, browserTarget = `${projectName}:build` } = options;

  return {
    builder: builder,
    options: {
      buildTarget: buildTarget,
      browserTarget: browserTarget || undefined,
    },
    // SERVE CONFIGURATIONS
    configurations: configurations || undefined,
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

const PROJECT_STRUCTURE = (project) => {
  const { title: projectName, prefix = PREFIX } = project;

  ANGULAR_JSON.projects[projectName] = {
    projectType: 'application',
    root: `apps/${projectName}`,
    sourceRoot: `apps/${projectName}/src`,
    prefix: prefix || undefined,
    i18n: PROJECT_I18N(project),
    architect: {
      build: PROJECT_BUILD(project),
      serve: PROJECT_SERVE(project),
      e2e: PROJECT_E2E(project),
      'extract-i18n': PROJECT_EXTRACT_I18N(project),
      lint: PROJECT_LINT(project),
      test: PROJECT_TEST(project),
    },
  };
};

const GROUP_STRUCTURE = (group) => {
  const { title: projectName, prefix = PREFIX } = group;

  ANGULAR_JSON.projects[projectName] = {
    projectType: 'library',
    root: `libs/${projectName}`,
    sourceRoot: `libs/${projectName}/src`,
    prefix: prefix || undefined,
    architect: {},
  };
};

const COMPONENT_STRUCTURE = (component) => {
  const { title: projectName, folder: root, prefix = PREFIX } = component;

  ANGULAR_JSON.projects[projectName] = {
    projectType: 'library',
    root: `libs/${root}`,
    sourceRoot: `libs/${root}/src`,
    prefix: prefix || undefined,
    architect: {
      lint: {
        builder: '@nrwl/linter:eslint',
        options: {
          lintFilePatterns: [
            `libs/${root}/src/**/*.ts`,
            `libs/${root}/src/**/*.html`,
          ],
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
      },
      configurations: {
        production: {
          outputHashing: null,
          sourceMap: null,
          namedChunks: null,
          vendorChunk: null,
          inspect: false,
        },
      },
    },
    serve: {
      builder: '@nrwl/node:execute',
      options: {
        buildTarget: 'api:build',
        browserTarget: null,
      },
      configurations: null,
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
