const fs = require('fs');

const ANGULAR_JSON = {
  version: 1,
  projects: {},
};

const PREFIX = 's';

const PROJECT_STYLE_PREPROCESSOR_OPTIONS = {
  includePaths: ['libs/theme/src/lib/-mixins', 'libs/theme/src/lib/default'],
};
const PROJECT_STYLES = ['libs/theme/src/lib/theme.styles.less'];

const PROJECTS = [
  {
    title: 'flowers',
    stylePreprocessorOptions: PROJECT_STYLE_PREPROCESSOR_OPTIONS,
    styles: PROJECT_STYLES,
  },
  { title: 'flowers-e2e' },
  { title: 'api', prefix: 'api' },
];

PROJECTS.forEach((project) => {
  const {
    title: projectName,
    prefix = PREFIX,
    stylePreprocessorOptions,
    styles,
  } = project;

  const PROJECT_CONFIG = {
    projectType: 'application',
    root: `apps/${projectName}`,
    sourceRoot: `apps/${projectName}/src`,
    prefix: prefix,
    architect: {
      build: {
        builder: '@angular-devkit/build-angular:browser',
        options: {
          outputPath: `dist/apps/${projectName}`,
          index: `apps/${projectName}/src/index.html`,
          main: `apps/${projectName}/src/main.ts`,
          polyfills: `apps/${projectName}/src/polyfills.ts`,
          tsConfig: `apps/${projectName}/tsconfig.app.json`,
          aot: true,
          buildOptimizer: true,
          budgets: [
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
          assets: [
            `apps/${projectName}/src/favicon.ico`,
            {
              glob: '**/*',
              input: 'assets',
              output: 'assets',
            },
          ],
          stylePreprocessorOptions: stylePreprocessorOptions,
          styles: styles,
          scripts: [],
        },
      },
    },
  };
  ANGULAR_JSON.projects[projectName] = PROJECT_CONFIG;
});

fs.writeFileSync(
  './angular.json',
  JSON.stringify(ANGULAR_JSON, null, 2),
  'utf-8'
);
