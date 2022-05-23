/* Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.*/

const bankAccount = {
  _amount: 1000
}

/* In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:*/

bankAccount._amount = 1000000;

/* Example: */

const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

/* Below the robot object, reassign the _energyLevel property to 'high'.

Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

What will happen now that _energyLevel isn’t a number?

Call .recharge() on robot to find out.

Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties. */

const robot = {
  _energyLevel: "high",
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot.recharge(); //OUTPUT: Recharged! Energy is currently at high30%.
