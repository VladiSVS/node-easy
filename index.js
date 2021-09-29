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
