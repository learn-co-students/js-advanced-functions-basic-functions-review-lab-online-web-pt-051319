function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrap = "*") {
  return function(adj = "special") {
    return `You are ${wrap}${adj}${wrap}!`;
  };
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

function actionApplyer(num, functions) {
  if (functions.length === 0) {
    return num;
  } else {
    let output = num;
    functions.forEach(function(f) {
      output = f(output);
    });
    return output;
  }
}
