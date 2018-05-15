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

// var firstName = 'Tajammul' // CamelCase
// var first_name = 'Tajammul' // UnderScore 
// var FirstName = 'Tajammul' // PascalCase
// var firstname = 'Tajammul' // small letter case

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

// String  Operations
const firstName = 'Tajammul'
const lastName = 'Pasha'

let val;

// String Concatenation
val = firstName + ' ' + lastName

// Append

val = 'Hello '
val += 'There'

// Escaping

val = ' That\'s Awesome! '

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[1];

// indexOf
val = firstName.indexOf('T ');

// charAt
val = firstName.charAt(2);
val = firstName.charAt(0);

// substring
val = firstName.substring(0, 3);

// slicing
val = firstName.slice(-3);

// split
str = 'Hello! My name is tajammul pasha'
val = str
val = str.split(' ');

// replace()
val = str.replace('Hello', 'Hi')

// includes()

val = str.includes('tajammul pasha');
val = str.includes('Hi');

console.log(val)