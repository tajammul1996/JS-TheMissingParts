// Arrays

const numbers = [1, 2, 3, 4, 5]
const numbers2 = new Array(2, 4, 5, 6)
const fruits = ['Apple', 'Mango', 'Orange', 'Peach', 'Banana']
const mixed = [1, 2, 3, 'Pomegranate', null, {a: 1, b: 2}, new Date()]


let val;

// Check length of array
val = mixed.length;

// Check if array
val = Array.isArray(mixed); 

// Insert into array
numbers[1] = 99  

// Find index of value in array
val = mixed.indexOf(null)

// MUTATING ARRAYS
// Add to end
numbers.push(6)

// Add to start of array
numbers.unshift(0)

// Pop from end
numbers.pop()
// pop from start
numbers.shift()
// numbers.shift()

// Splice 
numbers.splice(0, 1);

//reverse
numbers.reverse()

// Concatenate arrays
val = numbers.concat(numbers2);

// Sort arrays
val = fruits.sort();

val = numbers.concat(numbers2).sort()

// Find

function under50(num){
    return num < 50;
}


// find takes function to find according to criteria 
val = numbers.find(under50)

// console.log(numbers);
// console.log(val);


// Object LIterals

const person = {
    fname: 'Tajammul',
    lname: 'Pasha',
    age: 22,
    job: 'SDE',
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    },
    email: 'tpzuffari@gmail.com',
    hobbies: ['gaming', 'coding'],
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

let value;

value = person;

// Preferred Way
value = person.fname

// can do like this but looks hectic and not preferred
// value = person['fname'];

value = person.age;
value  = person.hobbies[0]
value = person.address.city
value = person.getBirthYear() 


const people = [
    {name: 'tajammul', age: 23},
    {name: 'pasha', age: 22},
    {name: 'zuffari', age: 21}
]

for( i=0; i<people.length; i++){
    console.log(people[i].name)
}

console.log(value);