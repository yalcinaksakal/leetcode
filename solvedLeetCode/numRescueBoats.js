/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
	let boats = 0,
		i = 0,
		j = people.length;
	people.sort((a, b) => a - b);
	while (i <= --j) {
		boats++;
		if (people[j] + people[i] <= limit) i++;
	}
	return boats;
};
