## Getting Started

To begin, clone the project. Once cloned, you need to install all the dependencies for the site. To do this you need to have `Yarn` and `Node v20.9.0` installed and in the root level run.

`yarn`

## Unit Testing

I'm use [React Testing Library](https://testing-library.com/) to unit test the components.

To Run the test suite, use the command `yarn test` at the root. This will run test on all test in every package.

If creating a new test for a component, add a file at the root of the component folder named `[ComponentName].test.{js|tsx}`. After writing the tests withing this file, you can run `yarn test` and the test suite will pick up your new component tests and run them alongside the rest.


## Tools

This package uses the following tools

NextJs
Redux Toolkit
Jest
React Testing Library
Styled components
React Infinite Scroll Component

I've also used a number of linting packages to help maintain the code quality

## Approach

Using Next15 I focused on splitting the code up into seperate reusable components. NextJS also uses server and client components so that allowed me to fetch data server side. I then took that data and updated the Redux object so that the data could be shared throughout the app.

I like to split components up into logic and structure as if keeps these things seperate. I also like to add resuable code into its own file so it can be reused but also makes it easier to test.

As the data returned from the API didn't have any authors, I added some with mock data. The API also doesn't split into pages so I used the 'skip' feature to allow me to calculate the current and next page.

## Adding a New Post

I added a component called 'MockAddingItem'. This sits in a fixed position and only is used to demostrate a new post being added which is why it remains unstyled. It adds the same data as I fetch making another API call was unnecessary for the demo