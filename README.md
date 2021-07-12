[![Netlify Status](https://api.netlify.com/api/v1/badges/d75d7b01-86f5-481f-87ca-d72f731979b0/deploy-status)](https://app.netlify.com/sites/firstleaf-test/deploys)

[![Jest Branches](https://github.com/MiltonTulli/firstleaf-test/blob/jest-badges/coverage/badge-branches.svg)]

[![Jest Functions](https://github.com/MiltonTulli/firstleaf-test/blob/jest-badges/coverage/badge-functions.svg)]

[![Jest Lines](https://github.com/MiltonTulli/firstleaf-test/blob/jest-badges/coverage/badge-lines.svg)]

# Firstleaf - React js test

---

This is my solution to the Firstleaf react js challenge.

> The static **website** will be hosted here 👉 [https://firstleaf-test.netlify.app/](https://firstleaf-test.netlify.app/).
> Thanks to Netlify!🔥

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Screen Shot(s)

![app 1](https://github.com/MiltonTulli/firstleaf-test/blob/master/screenshots/app1.png)

## Folder Structure

Folder structure options and naming conventions for software projects

    ├── public          # Public files (static content)
    ├── src             # Source files
    │   ├── components     # React stateless components
    │   ├── containers     # Connected Components
    │   ├── interfaces     # Typescript business objects
    │   ├── modules        # Redux reducers
    │   ├── utils          # Utils
    │   └── ...
    └── README.md

## Installation and Setup Instructions

## Setup 🔧

```
git clone https://github.com/MiltonTulli/firstleaf-test.git
cd firstleaf-test
yarn install
```

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn test:c`

Launches the test runner. It will generate a coverage report on the next location:

```
firstleaf-test/coverage/lcov-report/index.html
```

![test coverage](https://github.com/MiltonTulli/firstleaf-test/blob/master/screenshots/coverage.png)

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Built with 🛠️

| Lib        | URL                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------ |
| React      | [https://es.reactjs.org/](https://es.reactjs.org/)                                               |
| Typescript | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)                               |
| Redux      | [https://es.redux.js.org/](https://es.redux.js.org/)                                             |
| Jest       | [https://jestjs.io/docs/en/getting-started.html](https://jestjs.io/docs/en/getting-started.html) |
| Enzyme     | [https://airbnb.io/enzyme/](https://airbnb.io/enzyme/)                                           |

## Author ✒️

> **Milton Tulli** > milton.tulli@gmail.com > [https://www.linkedin.com/in/miltontulli/](https://www.linkedin.com/in/miltontulli/)

## Notes:

- For the styles I used the material-ui library to speed up delivery times. There are also custom styles present with jss.
- The coverage of the tests is not complete, but it covers the main functionalities.
- A possible improvement would be to add some kind of virtualization to avoid unnecessary rendering of all cards.
