const reverseString = function (str) {
	let out = ''
	for (let i = str.length; i > 0; i--) {
		out += str.charAt(i - 1)
	}
	return out
}

// Do not edit below this line
module.exports = reverseString
