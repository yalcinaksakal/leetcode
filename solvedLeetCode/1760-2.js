/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
	let low = 1,
		high = 10 ** 9,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		nums.reduce((acc, cur) => acc + Math.ceil(cur / mid - 1), 0) > maxOperations
			? (low = mid + 1)
			: (high = mid);
	}
	return low;
};
console.log(minimumSize([9], 2));
