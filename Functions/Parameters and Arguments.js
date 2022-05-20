/* So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called. 

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

*/

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks(); // OUTPUT: Thank you for your purchase undefined We appreciate your business.  (Undefined because we didn't enter parameter for name)
sayThanks("Marko"); // OUTPUT: Thank you for your purchase Marko! We appreciate your business.