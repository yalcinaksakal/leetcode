/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
	let sum = nums[0],
		max = sum;
	for (let i = 1; i < nums.length; i++) {
		sum = nums[i] > nums[i - 1] ? sum + nums[i] : nums[i];
		max = Math.max(max, sum);
	}

	return max;
};
