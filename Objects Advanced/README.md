# Introduction

Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

So if there are no objections, let’s learn more about objects!

In this lesson we will cover these topics: 

• how to use the ```this``` keyword.
• conveying privacy in JavaScript methods.
• defining getters and setters in objects.
• creating factory functions.
• using destructuring techniques.

```javascript
const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}
```

# Review

• The object that a method belongs to is called the calling object.

• The this keyword refers to the calling object and can be used to access properties of the calling object.

• Methods do not automatically have access to other internal properties of the calling object.

• The value of this depends on where the this is being accessed from.

• We cannot use arrow functions as methods if we want to access other internal properties.

• JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.

• The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.

• Setters and getter methods allow for more detailed ways of accessing and assigning properties.

• Factory functions allow us to create object instances quickly and repeatedly.

• There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

• As with any concept, it is a good skill to learn how to use the documentation with objects!

