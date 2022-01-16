/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
	const dp = {};
	let dif,
		res = 0;

	for (let i = 0; i < nums.length; i++)
		for (let j = i + 1; j < nums.length; j++) {
			dif = nums[i] - nums[j];
			dp[dif] ? dp[dif]++ : (dp[dif] = 2);
			res = Math.max(res, dp[dif]);
		}
	return res;
};
