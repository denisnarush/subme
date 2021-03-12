const fs = require('fs');
const p = require('prettier');

const ANGULAR_JSON = {
  version: 1,
  projects: {},
};

const PROJECT_PREFIX = 's';

const PROJECT_STYLE_PREPROCESSOR_OPTIONS = {
  includePaths: ['libs/theme/src/lib/-mixins', 'libs/theme/src/lib/default'],
};

const PROJECT_STYLES = ['libs/theme/src/lib/theme.styles.less'];

const PROJECT_BUILD = (project) => {
  if (!project.build) {
    return undefined;
  }

  const { title: projectName, stylePreprocessorOptions, styles } = project;

  const { build = {} } = project;
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
    optimization = true,
    extractLicenses = true,
    outputHashing = 'all',
    sourceMap = false,
    namedChunks = false,
    vendorChunk = false,
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
      index: index || undefined,
      main: `apps/${projectName}/src/main.ts`,
      polyfills: polyfills || undefined,
      tsConfig: `apps/${projectName}/tsconfig.app.json`,
      aot: aot || undefined,
      buildOptimizer: buildOptimizer || undefined,
      budgets: budgets || undefined,
      assets: [
        {
          glob: '**/*',
          input: 'assets',
          output: 'assets',
        },
      ],
      stylePreprocessorOptions: stylePreprocessorOptions,
      styles: styles || undefined,
      scripts: scripts || undefined,
    },
    // BUILD CONFIGURATIONS
    configurations: {
      production: {
        optimization: optimization,
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
  if (!project.serve) {
    return undefined;
  }

  const { title: projectName } = project;

  return {
    builder: '@angular-devkit/build-angular:dev-server',
    options: {
      browserTarget: `${projectName}:build`,
    },
    // SERVE CONFIGURATIONS
    configurations: {
      production: {
        browserTarget: `${projectName}:build:production`,
      },
    },
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
  if (!project.i18n) {
    return undefined;
  }

  const { title: projectName } = project;

  return {
    builder: '@angular-devkit/build-angular:extract-i18n',
    options: {
      browserTarget: `${projectName}:build`,
    },
  };
};

const PROJECT_LINT = (project) => {
  if (!project.lint) {
    return undefined;
  }

  const { title: projectName, lint } = project;

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
  if (!project.test) {
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

const PROJECTS = [
  {
    title: 'flowers',
    prefix: PROJECT_PREFIX,
    stylePreprocessorOptions: PROJECT_STYLE_PREPROCESSOR_OPTIONS,
    styles: PROJECT_STYLES,
    build: {},
    serve: {},
    i18n: {},
    lint: {},
    test: {},
  },
  {
    title: 'flowers-e2e',
    e2e: { target: 'flowers' },
    lint: { options: { lintFilePatterns: ['apps/flowers-e2e/**/*.{js,ts}'] } },
  },
  {
    title: 'api',
    prefix: 'api',
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
    serve: {},
  },
];

PROJECTS.forEach((project) => {
  const { title: projectName, prefix } = project;

  const PROJECT_CONFIG = {
    projectType: 'application',
    root: `apps/${projectName}`,
    sourceRoot: `apps/${projectName}/src`,
    prefix: prefix,
    architect: {
      build: PROJECT_BUILD(project),
      serve: PROJECT_SERVE(project),
      e2e: PROJECT_E2E(project),
      'extract-i18n': PROJECT_I18N(project),
      lint: PROJECT_LINT(project),
      test: PROJECT_TEST(project),
    },
  };
  ANGULAR_JSON.projects[projectName] = PROJECT_CONFIG;
});

fs.writeFileSync(
  './angular.json',
  p.format(JSON.stringify(ANGULAR_JSON), { parser: 'json-stringify' }),
  'utf-8'
);
