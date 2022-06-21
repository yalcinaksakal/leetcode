/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
	let low = 1,
		high = 10 ** 6,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		nums.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0) > threshold
			? (low = mid + 1)
			: (high = mid);
	}
	return low;
};
