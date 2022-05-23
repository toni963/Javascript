/*A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:
*/


const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};


/*In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:
*/


const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


/* Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!*/

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);

tinCan.beep(); //OUTPUT: Beep Boop