let data = require('./data')
let dataProject = require('./dataProject')
let func = require('./function.js')
let arr = ["remove", "stay", "stay5", 22, true, "remove"]
let numArr = [1, 6, 9, 2, 1, 6, 7, 10]

console.log("------------------------------------------------------")

console.log(data.arrayNumbers)

console.log("------------------------------------------------------")

console.log(data.arrayCars)

console.log("------------------------------------------------------")

console.log(func.showOne(arr))

console.log("------------------------------------------------------")

console.log(func.showTwo(numArr))

console.log("------------------------------------------------------")

console.log(func.multi(6, 3, "*"))

console.log("------------------------------------------------------")

console.log(func.popilationLargest(dataProject))

console.log("------------------------------------------------------")

console.log(func.popilationSmallest(dataProject))

const _ = require('lodash')
console.log(_.head(numArr))


// Synchronous: blocking
let num1 = 2
let num2 = 3
console.log("first console", num1)
console.log("second console", num1)
console.log("third console", num2)

//Asynchronous: non blocking
setTimeout(() => {
    console.log("forth console", num2)
}, 100)

console.log("fifth console", num1)

//Asynchronous: non blocking => Callback, Promise, Async Await
// this.setState({ data: json }, () => {
//     done: true
// })

// document.getElementById("button").addEventListener("click", ()=>{
//     console.log(("clicked"))
// })

//Promise

const axios = require('axios');

// Make a request for a user with a given ID
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//         console.log("test")
//     });

console.log("Hello world")

let myPromise = new Promise((resolve, reject) => {
    let random = Match.random()
    if (random > 0.5) {
        resolve() // successfull
    } else {
        reject() // error
    }
})

//call 
myPromise
    .then(() => console.log('Success, random is bigger than 0.5'))
    .catch(() => console.log('Error, random is smaller than 0.5'))


console.log("hello world 1990")
// console.log(erik)

try {
    console.log(erik)
    console.log("show the code")
} catch (error) {
    console.log(error)
}
console.log("hello world 2021")

// async await 
async function getTodo() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

function logIn() {
    console.log("is logged in")
}

console.log("before function sync")
logIn()
console.log("after function sync")


console.log("before function sync")
getTodo()
console.log("after function sync")
