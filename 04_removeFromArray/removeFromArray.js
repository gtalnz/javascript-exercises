const removeFromArray = function (items) {
	let toBeRemoved = [...arguments].slice(1)
	let remaining = []
	items.forEach((val) => {
		if (!toBeRemoved.includes(val)) {
			remaining.push(val)
		}
	})

	return remaining
}

// Do not edit below this line
module.exports = removeFromArray
