# Introduction to Objects

Many components of the language are actually objects under the hood, and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.

There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities. We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.

At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own!


## Objects Review

• Objects store collections of key-value pairs.

• Each key-value pair is a property—when a property is a function it is known as a method.

• An object literal is composed of comma-separated key-value pairs surrounded by curly braces.

• You can access, add or edit a property within an object by using dot notation or bracket notation.

• We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.

• We can navigate complex, nested objects by chaining operators.

• Objects are mutable—we can change their properties even when they’re declared with const.

• Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.

• We can iterate through objects using the ```For...in``` syntax.
