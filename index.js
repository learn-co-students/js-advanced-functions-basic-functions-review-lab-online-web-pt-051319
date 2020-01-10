function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper = "*") {
    let msg = "You are"
    return function (adjective = "special") {
        return `${msg} ${wrapper}${adjective}${wrapper}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}

function actionApplyer(start, fArray) {
    for (let i = 0; i < fArray.length; i++) {
        start = fArray[i](start);
    }
    return start;
}