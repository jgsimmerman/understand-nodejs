const firstname: string = 'Jane';

(((lastname: string) => {

	const firstname: string = 'John';
	console.log(firstname);
	console.log(lastname);
	
})('Doe'));

console.log(firstname);

/* JS Output

var firstname = 'Jane';
((function (lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
})('Doe'));
console.log(firstname);

*/
