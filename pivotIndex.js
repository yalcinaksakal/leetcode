/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	const preSum = {},
		l = nums.length;
	preSum[-1] = 0;

	for (let i = 0; i < l; i++) preSum[i] = preSum[i - 1] + nums[i];
	preSum[l] = preSum[l - 1];

	for (let i = 0; i < l; i++)
		if (preSum[l] - preSum[i] == preSum[i - 1]) return i;

	return -1;
};
