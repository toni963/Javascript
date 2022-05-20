# **Introduction to Iterators**

Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

```javascript
const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);
```

## **ITERATORS REVIEW**

• .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

• .map() executes the same code on every element in an array and returns a new array with the updated elements.

• .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

• .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

• .reduce() iterates through an array and takes the values of the elements and returns a single value.

• All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

• You can visit [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to learn more about iterator methods (and all other parts of JavaScript!).

# Iterator Documentation

There are many additional built-in array methods, a complete list of which is on [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods).

The documentation for each method contains several sections:

A short definition.
A block with the correct syntax for using the method.
A list of parameters the method accepts or requires.
The return value of the function.
An extended description.
Examples of the method’s use.
Other additional information.
In the instructions below, there are some errors in the code. Use the documentation for a given method to determine the error or fill in a blank to make the code run correctly.

```javascript
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];
```
Something is missing in the method call below
```javascript
console.log(
  words.some((word) => {
    return word.length < 6;
  })
);
```
Use filter to create a new array
```javascript
const interestingWords = words.filter((word) => {
  return word.length > 5;
});
```
Make sure to uncomment the code below and fix the incorrect code before running it
```javascript
console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

/*OUTPUT: true
true
*/
```
