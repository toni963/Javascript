/* What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

To run a backward for loop, we must:

• Set the iterator variable to the highest desired value in the initialization expression.
• Set the stopping condition for when the iterator variable is less than the desired amount.
• The iterator should decrease in intervals after each iteration.
*/

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}