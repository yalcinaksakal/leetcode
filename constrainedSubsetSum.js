/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var constrainedSubsetSum = function (nums, k) {
	let max = nums[0],
		newVal,
		start;

	for (let i = 0; i < nums.length; i++) {
		start = i > k ? i - k : 0;
		if (nums[start - 1] == newVal) {
			newVal = 0;
			for (let j = start; j < i; j++) newVal = Math.max(newVal, nums[j]);
		}
		nums[i] += newVal;
		newVal = Math.max(nums[i], newVal);
		max = Math.max(max, nums[i]);
	}
	return max;
};
constrainedSubsetSum([10, 2, -10, 5, 20], 2);

var constrainedSubsetSum1 = function (nums, k) {
	const subs = [];
	let max = nums[0],
		l,
		sum;

	for (let i = 0; i < nums.length; i++) {
		l = subs.length;
		subs.push({ sum: nums[i], last: i });
		max = Math.max(max, nums[i]);
		for (let j = 0; j < l; j++)
			if (i - subs[j].last <= k) {
				sum = subs[j].sum + nums[i];
				subs.push({ sum, last: i });
				max = Math.max(max, sum);
			}
	}
	return max;
};
