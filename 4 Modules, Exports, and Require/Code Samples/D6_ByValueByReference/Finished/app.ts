// pass by value
function change(b: number) {
	b = 2;
}

const a: number = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d: any) {
	d.prop1 = function() {};
	d.prop2 = {};
}

const c: object = {};
c.prop1 = {};
changeObj(c);
console.log(c);

/* JS Output
// pass by value
function change(b) {
    b = 2;
}
var a = 1;
change(a);
console.log(a);
// pass by reference
function changeObj(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
*/
