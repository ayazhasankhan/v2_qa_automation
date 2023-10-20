# Playwright (TS binding) + Cucumber (BDD)

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environment 
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Github Actions integrated with downloadable report
7. Page object model

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report
3. [Logs](https://www.npmjs.com/package/winston)
4. Screenshots of failure
5. Test videos of failure

## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. then run the following comand
    'npm install multiple-cucumber-html-reporter'
    'npm install multiple-cucumber-html-reporter --save'
    'npm install multiple-cucumber-html-reporter --save-dev'
6. `npm test` to execute the tests

### Folder structure
0. `src\pageObject\components` -> All locators goes here
1. `src\pageObject\pages` -> All page actions go here
2. `src\test\features` -> write your features here
3. `src\test\steps` -> Your step definitions goes here
4. `src\hooks\hooks.ts` -> Browser setup and teardown logic
5. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
6. `src\helper\env` -> Multiple environments are handled
7. `src\helper\types` -> To get environment code suggesstions
8. `src\helper\report` -> To generate the report
9. `cucumber.json` -> One file to do all the magic
10. `package.json` -> Contains all the dependencies
