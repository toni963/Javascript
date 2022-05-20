#ARRAYS

Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

```
New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle
```
Let’s now write this list in JavaScript, as an array:

```javascript
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

[Arrays](https://www.codecademy.com/resources/docs/javascript/arrays?page_ref=catalog) are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.


• Arrays are lists that store data in JavaScript.

• Arrays are created with brackets [].

• Each item inside of an array is at a numbered position, or index, starting at 0.

• We can access one item in an array using its index, with syntax like: myArray[0].

• We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';

• Arrays have a length property, which allows you to see how many items are in an array.

• Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.

• Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.

• Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.

• Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.

• Arrays mutated inside of a function will keep that change even outside the function.

• Arrays can be nested inside other arrays.

• To access elements in nested arrays chain indices using bracket notation.
