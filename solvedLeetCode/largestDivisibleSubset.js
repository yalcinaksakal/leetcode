/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
	const dp = {};
	let max = { index: 0, length: 0 };
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) dp[i] = [nums[i]];

	const check = (num, j) => num % dp[j][0] == 0 && num % nums[j] == 0;

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++)
			if (dp[i].length < dp[j].length + 1 && check(nums[i], j))
				dp[i] = [...dp[j], nums[i]];
		if (dp[i].length > max.length) max = { index: i, length: dp[i].length };
	}
	return dp[max.index];
};

largestDivisibleSubset([105, 7, 210, 21, 420, 840, 3, 6, 12, 24, 96, 192, 576]);
