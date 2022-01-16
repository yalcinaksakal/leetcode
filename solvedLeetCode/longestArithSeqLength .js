/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
	const n = nums.length,
		dp = Array(n)
			.fill()
			.map(() => ({}));

	console.log(dp);
	let longest = 1,
		dif;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			dif = nums[i] - nums[j];
			dp[i][dif] = dp[j][dif] ? dp[j][dif] + 1 : 2;
		}
		longest = Math.max(longest, ...Object.values(dp[i]));
	}
	return longest;
};

longestArithSeqLength([3, 6, 9, 12]);
