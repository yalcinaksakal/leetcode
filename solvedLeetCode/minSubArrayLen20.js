/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let sum = 0,
		minSize = nums.length + 1,
		i = 0,
		j = 0;

	while (i < nums.length) {
		if (sum >= target) {
			minSize = Math.min(j - i, minSize);
			if (minSize === 1) break;
			sum -= nums[i++];
			continue;
		}
		if (j === nums.length) break;
		sum += nums[j++];
	}
	return minSize === nums.length + 1 ? 0 : minSize;
};
minSubArrayLen(4, [1, 4, 4]);
