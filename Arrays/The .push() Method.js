// .push() allows us to add items to the end of an array. Here is an example of how this is used:

const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

/* So, how does .push() work?

• We access the push method by using dot notation, connecting push to itemTracker with a period.
• Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
• .push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.

• Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.

If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you! */


const chores = ['wash dishes', 'do laundry', 'take out trash'];


chores.push('Krompir');

console.log(chores);

// OUTPUT: [ 'wash dishes', 'do laundry', 'take out trash', 'Krompir' ]