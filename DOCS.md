# S

Very important description!

## Technologies & Tools/Libs/Frameworks

- PostgreSQL 13.1
- Typescript
- Angular, NestJS
- Prisma, Akita
- Less
- Jest
- Nx

## Unit Test

- `nx test` run test for all projects (flowers, api, ui & etc.)
- `nx test <project>` run test for \<project\> project.
- `nx test <project> --with-deps` run test for \<project\> with deep dive to all dependencies.
- `nx test <project> --watch` run test with **watch** mode.

## E2e Test

- `nx e2e <project>-e2e --watch` run e2e test for \<project\>

## NX

- `nx g @nrwl/angular:lib` Creates lib.
- `nx g component <name> --project=<project>`
- `nx g module <name> --project=<project>`

- `nx serve <project>` - serves \<project\>. Default url is **://localhost:4200/api**
- `nx serve api` - serves API. Default url is **://localhost:3333/api**

- `nx build <project>` - builds the \<project\> project

```text
  + TODO: white-labeling & themes [fonts, variables, colors]
  TODO: one assets folder
  TODO: i18n [text, pictures]
  TODO: add Prisma
  TODO: add Akita
  TODO: move production configuration to default in angular.json
  TODO: create CI Actions in GitHub
```
