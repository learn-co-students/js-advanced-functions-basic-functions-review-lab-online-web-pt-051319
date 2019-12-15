// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") { //inner
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: (num1, num2) => { return num1 + num2 },
    subtract: (num1, num2) => { return num1 - num2 },
    multiply: (num1, num2) => { return num1 * num2 },
    divide: (num1, num2) => { return num1 / num2 }
}

function actionApplyer(startingInteger, functionArray) {
    return functionArray.reduce(function(total, element) {
        return element(total)
    }, startingInteger)
}