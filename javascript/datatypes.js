//primitive

//7types : String ,Number , Boolean ,null ,underfined ,symbol,BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbols 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 2352655542545645845666n

// Referance type (non primitive ):- Array, Objects, Functions 

//array
const heros = ["shaktiman ", "gajendra "];
//objects
let myObj = {
        name:"gajendra",
        age:22,

}

//functions

        const myFunction = function(){
            console.log("hello world");
        }

        console.log(typeof bigNumber)
   