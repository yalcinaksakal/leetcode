/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
	let count = 0,
		max = 0;

	for (let i = 0; i < flips.length; ) {
		max = Math.max(max, flips[i++]);
		if (max == i) count++;
	}
	return count;
};
