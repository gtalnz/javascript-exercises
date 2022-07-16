const leapYears = function (year) {
	// Years not divisible by 4 are never leap years
	if (year % 4 != 0) {
		return false
	}
	// Years divisible by 400 are always leap years
	if (year % 400 == 0) {
		return true
	}
	// Any other years divisible by 100 are not leap years
	if (year % 100 == 0) {
		return false
	}
	// Any remaining years are leap years
	return true
}

// Do not edit below this line
module.exports = leapYears
