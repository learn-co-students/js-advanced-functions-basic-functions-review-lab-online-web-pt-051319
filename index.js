const saturdayFun = (activity = 'roller-skate') => {
	return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
	return `This Monday, I will ${activity}.`
}

const wrapAdjective = (hl ='*') => {
	return (phrase) => `You are ${hl}${phrase}${hl}!`
}

let Calculator = {
	'add' : (x,y) => x + y,
	'subtract' : (x,y) => x - y,
	'multiply' : (x,y) => x * y,
	'divide' : (x,y) => x / y
}

const actionApplyer = (init, xforms) => {
	return xforms ? xforms.reduce((a, xform) => a = xform(a), init) : init
}