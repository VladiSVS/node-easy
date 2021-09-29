
function showOne(arr) {
    return arr.slice(0, -1)
}

function showTwo(arr) {
    return arr.filter((item, pos) => arr.indexOf(item) == pos)
}

function multi(a, b, c) {
    if (typeof a === "number" && typeof b === "number") {
        if (c === "+") {
            return a + b
        } else if (c === "-") {
            return a - b
        } else if (c === "*") {
            return a * b
        } else if (c === "/") {
            return a / b
        } else {
            return "Error"
        }
    }
    else {
        return "Enter the number"
    }
}

function popilationLargest(arr) {
    return arr.filter(elt => elt.population >= 100000)
}

function popilationSmallest(arr) {
    return arr.filter(elt => elt.population < 100000)
}


module.exports = { showOne, showTwo, multi, popilationLargest, popilationSmallest }