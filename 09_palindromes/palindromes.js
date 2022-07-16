const palindromes = function (word) {
	word = word.replaceAll(/[^a-zA-Z]/g, '')
	const midpoint = Math.floor(word.length / 2)
	const last = word.length - 1
	word = word.toLowerCase()
	for (let i = 0; i < midpoint; i++) {
		if (word[i] != word[last - i]) {
			return false
		}
	}
	return true
}

// Do not edit below this line
module.exports = palindromes
