## Getting Started

To begin, clone the project. Once cloned, you need to install all the dependencies for the site. To do this you need to have `Yarn` and `Node v20.9.0` installed and in the root level run.

`yarn`

## Unit Testing

We use [React Testing Library](https://testing-library.com/) to unit test our components.

To Run the test suite, use the command `yarn test` at the root. This will run test on all test in every package.

If creating a new test for a component, add a file at the root of the component folder named `[ComponentName].test.{js|tsx}`. After writing the tests withing this file, you can run `yarn test` and the test suite will pick up your new component tests and run them alongside the rest.


## Tools

This package uses the following tools

NextJs
Redux Toolkit
Jest
React Testing Library
Styled components

I've also used a number of linting packages to help maintain the code quality

## Approach

Using Next14 I focused on splitting the code up into seperate reusable components. NextJS also uses server and client components so that allowed me to fetch data server side. I then took that data and updated the Redux object so that the data could be shared throughout the app.

With the searchbox, I used a callback and set the value to state. I then used a custom hook, useSearchData, to filter the data and then return no results or the filtered list. Or if the field is cleared, the list is also cleared.

The fav list is triggered by the Like component which keeps the value in state (an improvement would also to add this to local storage)