/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
	const people = Array(num_people).fill(0);
	let c = 1;
	while (true)
		for (let i = 0; i < people.length; i++) {
			candies -= c;
			people[i] += c++;
			if (candies < 0) {
				people[i] += candies;
				return people;
			}
		}
};
