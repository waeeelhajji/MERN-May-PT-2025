// console.log("hello")

//!--ES5
var MernStackNinjas = "Welcome to our New Javascript"

//? ES6
const newStudents = "Welcome to the Best stack"
let theNewStudents = "be a great dev"

//~---- SCOPE
var name = "bob"

function SayHi() {
    name = "alice"
    console.log(name)

}

SayHi()//?
console.log(name)//? 
for (var let = 0; index < 7; index++) {


}
console.log(index)


//~---- HOISTING ----
console.log(x)
const x = 5

//? const

//~ Primitive datatypes
// String
// Number
// Boolean
// null / undefined
const test = "Hello"
test = 56
console.log(test)
//?
// var person
// const person2
//?
// var person
// const person2 = "dd"

// complex Datatypes
//~ Objects

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
}

// person = "Hello"

person.firstName = "Bobi"


console.log(person)

//~ Arrays
//------------------0----------1------2-----------3----------4
// ----------------X45 ------ f78 -----45h-----
const animals = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦']; // array of 5 elements W746646X
animals[1] = "Hi"
//------------X78 -----S102
animals = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦']
console.log(animals)


//! ---------------- Destructuring


const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
// ES5
// const firstName = person1.firstName
// const email = person1.email
// const username = person1.username
// console.log(firstName, " ", email, " ", username)
//? ES6

const { firstName, lastName, password } = person1
const { username, createdAt } = person1
console.log(firstName, " ", lastName, " ", password)
console.log(username, " ", createdAt)

// for (const index = 0; index < 10; index++) {


// }
// console.log(index)
// ------------------0----------1--------2----------3--------100
const animals1 = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦'];

// ES5
const dog = animals1[1]
const fish = animals1[2]
//? With ES6 Array
const [, , example, , anotherExm] = animals1
console.log(example)
console.log(anotherExm)

//! ---------------- REST / SPREAD
//~ assign something assign by value and by reference
const a = [10, 20, 30]
// const b = a
const b = [...a]

b.push(100)

console.log("A", a) //?
console.log("B", b)// ?


//! ----------- Arrow Function
//? ES5
function example(a, b) {
    return a + b
}

console.log(example(5, 2))

//? ES6 Fun
const exampleES6 = function () {
    return a + b
}
//? ES6 Arrow Fun
//!Name of the fun:example---Declaration of a function
//        -//-               -//-
const anotherExampleEs6 = (a, b) => {
    return a + b
}
//? anonyms
() => "Hello"

const anotherExampleEs6OneLine = (a, b) => a + b
const anotherExampleEs6OneLine2 = () => "hello"




//! ----------- (ternary) operator
//? ES5
const num = 15

if (num > 10) {
    console.log("Hello")
    // True
} else {
    console.log("hey")
    // False
}
//? ES6
num > 10 ? console.log("Hello") : console.log("Hey")
//---------------True----------------false







