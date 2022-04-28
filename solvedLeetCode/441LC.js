/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	let low = 0,
		mid,
		high = n;
	while (low < high) {
		mid = (low + high) >>> 1;
		if ((mid * (mid + 1)) / 2 < n) low = mid + 1;
		else high = mid;
	}
	return (low * (low + 1)) / 2 === n ? low : low - 1;
};
