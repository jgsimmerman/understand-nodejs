// Function Constructors: A Normal Function that is used to construct objects
// The 'this' variable points a new empty object, and that object is returned from the function automatically


class Person {
    constructor(firstname, lastname) {
        
        this.firstname = firstname;
        this.lastname = lastname;
      
    }

    greet() {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
}

const john = new Person('John', 'Doe');
john.greet();

const jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.constructor.prototype);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
console.log(john.__proto__ === jane.constructor.prototype);


/*	ES5 Code
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname // this becomes an empty object that you can attach things to when Person is called with "new" keyword
}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__)
console.log(john.constructor.prototype === john.__proto__)
*/
