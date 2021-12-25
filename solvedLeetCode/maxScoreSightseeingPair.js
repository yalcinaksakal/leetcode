/**
 * @param {number[]} values
 * @return {number}
 */

var maxScoreSightseeingPair = function (values) {
	const l = values.length;
	let prev = values[0],
		max = prev + values[1] - 1;

	for (let i = 1; i < l; i++) {
		max = Math.max(prev + values[i] - i, max);
		prev = Math.max(prev, values[i] + i);
	}
	return max;
};
console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
