/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
	let low = 0,
		high = Math.floor(c ** 0.5),
		sqSum;
	while (low <= high) {
		sqSum = low ** 2 + high ** 2;
		if (sqSum > c) high--;
		else if (sqSum < c) low++;
		else return true;
	}
	return false;
};
