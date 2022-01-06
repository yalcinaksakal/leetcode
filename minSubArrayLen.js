/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	const dp = [];
	let j;

	for (const num of nums)
		if (num >= target) return 1;
		else dp.push(num);

	for (let l = 2; l <= nums.length; l++)
		for (let i = 0; i <= nums.length - l; i++) {
			j = i + l - 1;
			dp[i] += nums[j];
			if (dp[i] >= target) return l;
		}

	return 0;
};
