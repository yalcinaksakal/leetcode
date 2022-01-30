/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//similar question to 322

var numSquares = function (n) {
	const nums = Array(Math.floor(n ** 0.5))
		.fill()
		.map((_, i) => (i + 1) ** 2);
	const dp = Array(n + 1).fill(n);
	dp[0] = 0;

	for (let a = 1; a < dp.length; a++)
		for (const num of nums)
			a - num >= 0 && (dp[a] = Math.min(dp[a], 1 + dp[a - num]));

	return dp.pop();
};
