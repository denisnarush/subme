# Commands

## isntall packages

- `npm ci` - if you just need to have clean install
- `npm i` - for the most common use.
- `npm i --legacy-peer-deps` - comes with npm v7, for situation when we should ignore all peerDependencies when installing, in the style of npm version 4 through version 6.

## node version management (windows)

- [nvm-windows](https://github.com/coreybutler/nvm-windows) tool

## start local `flowers` project

- `nx serve flowers` - serves flowers project

## start local `api` project

- `nx serve api` - serves flowers project

## Migrating to the latest Nx version

- `npx nx migrate latest`
- `npx nx migrate --run-migrations`
- `nx affected:test`
- `nx affected:lint`
- run [Angular.json](#angularjson) and make sure it has no difference, otherwise - update.

## Backstop

- `npx backstop test --config=apps/<project>/backstop.json` Create test screenshots and compare against the set you previously approved/referenced.
- `npx backstop approve --config=apps/<project>/backstop.json` Promotes all test bitmaps from last test run to reference bitmaps.
- `npx backstop reference --config=apps/<project>/backstop.json` Creates new reference screenshots. Deletes all existing reference files.

## Prisma

- `npx prisma introspect` Introspect an existing database
- `npx prisma generate` Generate artifacts (e.g. Prisma Client)
- `npx prisma studio` Browse your data

## NX

- `nx g @nrwl/angular:lib` Creates lib.
- `nx g component <name> --project=<project>`
- `nx g module <name> --project=<project>`

- `nx serve <project>` - serves \<project\>. Default url is **://localhost:4200**
- `nx serve api` - serves API. Default url is **://localhost:3333/api**

- `nx build <project>` - builds the \<project\>

- `nx add @angular/localize --name <project>` - adds i18n to \<project\>
- `nx extract-i18n <project>` - extracts \<project\>'s locale source data.

## E2E Test

- `nx e2e <project>-e2e --watch` run e2e test for \<project\>

## Test

- `nx test` run test for default project
- `nx test <project>` run test for \<project\> project.
- `nx affected:test` - will run test only touched files
- `nx test <project> --with-deps` run test for \<project\> with deep dive to all dependencies.
- `nx test <project> --watch` run test with **watch** mode.

## Lint

- `nx lint` run lint for default project
- `nx lint <project>` run lint for \<project\> project.
- `nx affected:lint` - will run lint only touched files

## Angular.json

- `node tools\generators\angular-json-configurator.js` - generates **angular.json** file.
