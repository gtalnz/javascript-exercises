const add = function (first, second) {
	return first + second
}

const subtract = function (first, second) {
	return first - second
}

const sum = function (nums) {
	return nums.reduce((prev, curr) => {
		return prev + curr
	}, 0)
}

const multiply = function (nums) {
	return nums.reduce((prev, curr) => {
		return prev * curr
	})
}

const power = function (num, pow) {
	return pow <= 1 ? num : num * power(num, pow - 1)
}

const factorial = function (num) {
	return num <= 0 ? 1 : num * factorial(num - 1)
}

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
}
