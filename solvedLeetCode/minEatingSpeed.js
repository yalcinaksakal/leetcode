/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let low = 1,
		high = Math.max.apply(null, piles),
		mid;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (piles.reduce((acc, cur) => (acc += Math.ceil(cur / mid)), 0) > h)
			low = mid + 1;
		else high = mid;
	}

	return low;
};
