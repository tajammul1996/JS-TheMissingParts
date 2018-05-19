// Date

console.log('-----Date-----')

let val;

const today = new Date();

val = today;

let birthday = new Date('01/07/1996')


// console.log(birthday)
// console.log(val)

// FUNCTION DECLARATION

function greet(firstName = 'Awesome', lastName= 'Person') {
    return `Hello ${firstName} ${lastName}`
}

// console.log(greet('Tajammul', 'Pasha'));
// console.log(greet())

// FUNCTION EXPRESSIONS 

const square = function(x = 1){
    return x*x
};

// console.log(square(12))

// IMMEDIATELY INVOKED FUNCTION EXPRESSION - IIFEs

// (function(expr){
//     console.log(`IIFE ${expr}`)
// })('run');