// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*") {   
        return function(word = "special") {
            return `You are ${symbol}${word}${symbol}!`
        }
}
    
let Calculator = {
    add: (a, b) => {
      return a + b;
    },
    subtract: (a, b) => {
      return a - b;
    },
    multiply: (a, b) => {
      return a * b;
    },
    divide: (a, b) => {
      return a / b;
    }
};

function actionApplyer (startInt, arrFunct) {
    let output = startInt
    for (let i = 0; i < arrFunct.length; i++ ) {
        output = arrFunct[i](output)
    }
    return output
}
