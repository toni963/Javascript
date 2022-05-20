# **Higher-Order Functions Introduction**


We are often unaware of the number of assumptions we make when communicating in our native languages. If we told you to “count to three,” we would expect you to say the numbers “one”, “two”, and “three”. We assumed you would know to start with “one” and end with “three”. With programming, we need to be more explicit with our directions to the computer. Here’s how we might tell the computer to “count to three”:
```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```
/When we speak to other humans, we share a vocabulary that provides quick ways to communicate complicated concepts. When we say the word “bake”, it calls to mind a familiar subroutine— preheating an oven, putting something into an oven for a set amount of time, and finally removing it. This allows us to abstract away a lot of the details and communicate key concepts more concisely. Instead of listing all those details, we can say, “We baked a cake,” and still impart all that meaning to you.

In this lesson, we’ll learn how to use “abstraction” in programming by writing functions. In addition to allowing us to reuse our code, functions help to make clear, readable programs. If you encounter countToThree() in a program, you might be able to quickly guess what the function does without having to stop and read the function’s body.

We’re also going to learn about a way to add another level of abstraction to our programming: higher-order functions. Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction that may build on the abstraction “We made a cake.”





## **HIGHER-ORDER FUNCTIONS REVIEW**

By thinking about functions as data, and learning about higher-order functions, you’ve taken important steps in learning to write clean, modular code that takes advantage of JavaScript’s flexibility.

Let’s review what we learned in this lesson:

• Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

• We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

• JavaScript functions are first-class objects, so they have properties and methods like any other object.

• Functions can be passed into other functions as parameters.

• A higher-order function is a function that either accepts functions as parameters, returns a function, or both.*/


What happens if you change the value of 2 in checkA?
```javascript
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 1;
  let checkB = func(val);
  if (checkA === checkB) {
    return func(val);
  } else {
    return "inconsistent results";
  }
};

console.log(checkConsistentOutput(addTwo, 11)); // OUTPUT: inconsistent results
```

• Which variable holds the callback function?
• What happens if you invoke the function’s argument?
