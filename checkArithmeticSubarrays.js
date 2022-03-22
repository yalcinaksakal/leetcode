/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
	const n = nums.length,
		dp = Array(n)
			.fill()
			.map(() => Array(n).fill(true)),
		res = [];
	let j;
	for (length = 3; length <= nums.length; length++)
		for (let i = 0; i <= nums.length - length; i++) {
			j = i + length - 1;
			dp[i][j] =
				dp[i][j - 1] && nums[i + 1] - nums[i] + nums[j - 1] === nums[j];
		}
	for (let i = 0; i < l.length; i++) res.push(dp[l[i]][r[i]]);
	return res;
};

checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]);
