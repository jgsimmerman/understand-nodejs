/*
var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};
*/
const person = {
    firstname: 'John',
    lastname: 'Doe',
    greet() {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
}
person.greet();

console.log(person['firstname']);
