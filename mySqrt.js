/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let low = 0,
		high = x,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (mid * mid < x) low = mid + 1;
		else high = mid;
	}
	return low * low > x ? low - 1 : low;
};
