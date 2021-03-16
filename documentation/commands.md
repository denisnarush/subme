# Commands

## start local `flowers` project

- `nx serve flowers` - serves flowers project

## start local `api` project

- `nx serve api` - serves flowers project

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

## E2e Test

- `nx e2e <project>-e2e --watch` run e2e test for \<project\>

## Unit Test

- `nx test` run test for all projects (flowers, api, ui & etc.)
- `nx test <project>` run test for \<project\> project.
- `nx test <project> --with-deps` run test for \<project\> with deep dive to all dependencies.
- `nx test <project> --watch` run test with **watch** mode.

## Angular.json

- `node tools\generators\angular-json-configurator.js` - generates **angular.json** file.
