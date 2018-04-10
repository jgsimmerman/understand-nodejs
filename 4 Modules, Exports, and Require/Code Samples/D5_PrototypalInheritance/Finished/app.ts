class Person {
    constructor(firstname: string, lastname: string) {
        
        this.firstname = firstname;
        this.lastname = lastname;
      
    }

    greet(): void {
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

/* Compiles to: 
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.greet = function () {
        console.log("Hello, " + this.firstname + " " + this.lastname);
    };
    return Person;
}());
var john = new Person('John', 'Doe');
john.greet();
var jane = new Person('Jane', 'Doe');
jane.greet();
console.log(john.constructor.prototype);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
console.log(john.__proto__ === jane.constructor.prototype);
*/
