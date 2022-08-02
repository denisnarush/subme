# Workflow

- Take ticket *#N* and move it to *IN PROGRESS*
- Use GitHub and create branch from *master* with name *#N*
- In *#N* branch made commits

  commit message should start like: "#N updates ...", "#N creates ...", "#N adds ...", "#N removes ..."

- \* It will be nice to write some unit test
- \* It will be awesome to have e2e test
- Run test before push changes to origin

```sh
nx affected:test -- --base=origin/master
```

- Run lint before push changes to origin

```sh
nx affected:lint -- --base=origin/master
```

- Run/Update i18n before push changes to origin

```sh
nx extract-i18n flowers
```

- \* Be sure to avoid committing unnecessary formatted lines of code. It's affect i-18n

- Push *#N* branch changes to origin
- Use GitHub and create PR for *#N* to *master*
- Add reviewers and link *#N* ticket to the PR
- \* Continue working
- Move ticket *#N* to the *IN REVIEW*
- After PR is approved *squash and merge*

  don't forget to update squash commit message

- Delete *#N* branch
- \* Remove *#N* from local
- Make sure that *#N* moved to the *DONE*

\* - optional

![GitFlow](https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=461)
https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
