/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//similar question with 518
var combinationSum4 = function (nums, target) {
	const dp = Array(target + 1).fill(0);
	dp[0] = 1;
	for (let total = 1; total <= target; total++)
		for (const num of nums) if (total >= num) dp[total] += dp[total - num];
	return dp[target];
};

var combinationSumNeg = function (nums, target) {
	const dp = {};
	dp[0] = 1;
	for (const s of Object.keys(dp))
		for (const num of nums) if (s >= num) dp[total] += dp[total - num];
	return dp[target];
};
