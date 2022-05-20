/* We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. */

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

/*• jumbledNums is an array that contains elements that are numbers.
• const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
• The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
• num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Let’s take a look at what lessThanTen evaluates to:*/

console.log(lessThanTen); // Output: 3 

//If we check what element has index of 3:

console.log(jumbledNums[3]); // Output: 5


/*Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.*/

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1

/* SECOND CODE */

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((anim) => {
  return anim === "elephant";
});

const startsWithS = animals.findIndex((anim) => {
  return anim[0] === "s";
});

console.log(foundAnimal);
console.log(startsWithS);  /* output: 	7
					3*/