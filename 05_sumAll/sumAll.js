const sumAll = function (first, last) {
	let sum = 0
	let highest
	let lowest
	if (typeof first != 'number' || typeof last != 'number') {
		return 'ERROR'
	}
	if (first < 0 || last < 0) {
		return 'ERROR'
	}
	if (first < last) {
		lowest = first
		highest = last
	} else {
		lowest = last
		highest = first
	}
	for (let n = lowest; n <= highest; n++) {
		sum += n
	}
	return sum
}

// Do not edit below this line
module.exports = sumAll
