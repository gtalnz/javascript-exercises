const repeatString = function (str, reps) {
	if (reps < 0) {
		return 'ERROR'
	}
	let output = ''
	for (let n = 0; n < reps; n++) {
		output += str
	}
	return output
}

// Do not edit below this line
module.exports = repeatString
