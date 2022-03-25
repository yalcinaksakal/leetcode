/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	const candies = Array(ratings.length).fill(0),
		getNext = i => {
			candies[i] = ratings[i] > ratings[i + 1] ? getNext(i + 1) + 1 : 1;
			return candies[i];
		};
	let prev,
		next,
		total = 0;

	for (let i = 0; i < ratings.length; i += next) {
		prev = ratings[i] > ratings[i - 1] ? candies[i - 1] + 1 : 1;
		next = candies[i] ? candies[i] : getNext(i);
		candies[i] = Math.max(next, prev);
		total += candies[i];
	}

	return total;
};
