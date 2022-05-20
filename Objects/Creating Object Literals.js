/*Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:*/

let spaceship = {}; // spaceship is an empty object

/*We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.


A key’s value can be of any data type in the language including functions or other objects.

We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:*/

// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

/*The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.

Let’s make some objects!*/


// Write your fasterShip object literal below

let fasterShip = {
  color: "silver",
  "Fuel Type": "Turbo Fuel",
};
