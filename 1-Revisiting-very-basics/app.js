// Log to console

console.log('Hello world');
console.log(true)
console.log(' asdf')
console.log([1, 2, 3])
console.log({ name: 'Tajammul', age: 23})

// New Learnings
console.table([1, 3, 4]);
console.table({ name: 'Tajammul', age: 23})
console.error('This is so cool error!!!..') 
console.clear();
console.warn('this is warning!')
console.clear();

// var, let, const

var naame;
console.log(naame); 
naame='ew';
console.log(naame);

var firstName = 'Tajammul' // CamelCase
var first_name = 'Tajammul' // UnderScore 
var FirstName = 'Tajammul' // PascalCase
var firstname = 'Tajammul' // small letter case

/*

Primitive Data Types

string
number 
null
boolean
undefined
symbols (es6)


*/


/*

REFERENCE DATA TYPES

typeof will return object for all reference data types

Arrays
Object Literals
Functions
Dates
Anything else

*/ 

// date

const today = new Date();

console.log(today);
console.log(typeof today)


console.clear();

// The let statement declares a block scope local variable, optionally initializing it to a value.
// But in case of var, it declares the variable globally

var me;
console.log(me);

let my;
console.log(my);


console.clear();

// String(variable) or val.toString()
// Number('5') => 5
// toFixed()
// parseInt()
// parseFloat()
