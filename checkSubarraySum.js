/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
	const sums = {};
	sums[0] = true;
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		sum %= k;
		if (sums[sum] === undefined) {
			sums[sum] = i;
			continue;
		}
		if (i - sums[sum] > 1) return true;
	}
	return false;
};
