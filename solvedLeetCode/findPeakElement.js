/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
	let low = 0,
		high = nums.length - 1,
		mid;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (nums[mid] < nums[mid + 1]) low = mid + 1;
		else high = mid;
	}
	return low;
};
