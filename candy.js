/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	const candies = Array(ratings.length).fill(0);
	let prev, next;

	const getNext = i => {
		candies[i] = ratings[i] > ratings[i + 1] ? getNext(i + 1) + 1 : 1;
		return candies[i];
	};

	for (let i = 0; i < ratings.length; ) {
		prev = ratings[i] > ratings[i - 1] ? (prev = candies[i - 1] + 1) : 1;
		next = getNext(i);
		candies[i] = Math.max(next, prev);
		i += next;
	}

	return candies.reduce((a, b) => a + b, 0);
};
console.log(candy([1, 3, 2, 2, 1]));
