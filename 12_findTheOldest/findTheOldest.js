const findTheOldest = function (people) {
	return people.reduce((prev, curr) => {
		return isOlder(curr, prev) ? curr : prev
	})
}

const isOlder = (p1, p2) => {
	return getAge(p1) > getAge(p2)
}
const thisYear = new Date().getFullYear()

const getAge = (person) => {
	if (!person.yearOfDeath) {
		return thisYear - person.yearOfBirth
	}
	return person.yearOfDeath - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest
