/*Great job! By thinking about functions as data, and learning about higher-order functions, you’ve taken important steps in learning to write clean, modular code that takes advantage of JavaScript’s flexibility.

Let’s review what we learned in this lesson:

• Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

• We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

• JavaScript functions are first-class objects, so they have properties and methods like any other object.

• Functions can be passed into other functions as parameters.

• A higher-order function is a function that either accepts functions as parameters, returns a function, or both.*/


//• What happens if you change the value of 2 in checkA?
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

/*
• Which variable holds the callback function?
• What happens if you invoke the function’s argument?
*/