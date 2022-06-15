/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	let low = 0,
		high = num,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (mid ** 2 < num) low = mid + 1;
		else high = mid;
	}
	return low ** 2 === num;
};
