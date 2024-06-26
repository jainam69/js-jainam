//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 345645165156n
//console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myname = "JainamDoshi"
let myRealName = myname
myRealName = "JainamHDoshi"

// console.log(myname);
// console.log(myRealName);

let userOne = {
    email: "jainam@gmail.com",
    upi: "jainam@upi"
}

let userTwo = userOne
userTwo.email = "jainam@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// https://262.ecma-international.org/5.1/#sec-11.4.3