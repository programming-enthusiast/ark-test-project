# ark-test-project

This project is a test assessment project for ARK

# Requirements

## Aspects that you will be judged on for this assignment are the following:

-   Attention to detail: make sure your components resemble the design as close as possible.
-   Responsiveness: designs include various breakpoints and we expect you to mimic this in your implementation
-   State Management: ensure that your components work with various degrees of data, for example a component might receive an empty array, only a few data entries or requires a loading state while data is being fetched in the background.
-   Reusability: think in terms of building blocks and where it makes sense to move (parts of) your application to reusable components.
-   Tests: at a minimum you need to be sure your component works as intended, so how else to gauge this than having unit and e2e tests?

Any API requests can be made to our devnet API: https://dwallets.ark.io/api, corresponding docs can be found at https://ark.dev/docs/api/public-rest-api/getting-started.

# Assignments

## Task 1: Simple Wallet

Using the TypeScript Client packages, create a simplistic wallet with the following functionality:

-   Show a dropdown with the following 5 addresses:
    1. DR7WwjwGdw6mXoBrispUcTUHVV31AkAfs5
    2. D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax
    3. DNPBUxxGQUKDPX3XKUXa3pc4GK8yz7L97T
    4. DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES
    5. DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk
-   Show the transactions for the given address (incoming and outgoing), based on the dropdown selection

### Task hints and tips:

-   You only need to show 1 page of transactions for a given wallet: limit it to 15 entries in the table
-   When working with transaction timestamps, you’ll find that the unix timestamp does not correspond to the correct date when using the default unix epoch. Instead, these timestamps are based on the inception time of the ARK network, which is 2017-03-21T13:00:00.000Z. Knowing this, you should be able to translate timestamps to the correct human readable time.
-   You can link the transaction table links (e.g. tx id, sender, etc) to the respective Explorer pages.

## Task 2: Fee Input

The second task for this assignment is to implement the fee input from the designs. In addition to the designs, we have prepared tests for this component. You should use the tests in a TDD manner to figure out the functional requirements. Tests are provided in the .ZIP file that was shared with you. Slider range can go from 0 (min value) to 5 (max value).

You can add your component to the Task 1 codebase and provide instructions in your readme on how to include it (so we can add it to a part of the Task 1 wallet locally to see it in action).

# Implementation

## How to run this project
```
$ yarn dev
```
You can run the project using the command above.

## How to see the InputFee component in action
You can confirm the InputFee component using StoryBook.
```
$ yarn storybook
```
You can now access http://localhost:6006 and see how the InputFee component works.

## How to use the InputFee component
```
export const App = () => {
  const onChange = (value: number) => {
    console.log("onChange fired", value);
  };
  return <InputFee width="400" fieldName="Input Fee" onChange={onChange} />;
};
```


