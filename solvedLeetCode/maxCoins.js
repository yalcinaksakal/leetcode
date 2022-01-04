/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
	nums.push(1);
	nums.unshift(1);

	const dp = {};

	for (let i = 0; i < nums.length; i++) dp[i] = {};

	const dfs = (l, r) => {
		if (l > r) return 0;
		if (dp[l][r]) return dp[l][r];
		let coins = 0,
			tmp;
		for (let i = l; i <= r; i++) {
			tmp = nums[l - 1] * nums[i] * nums[r + 1];
			tmp += dfs(l, i - 1) + dfs(i + 1, r);
			coins = Math.max(coins, tmp);
		}
		dp[l][r] = coins;
		return coins;
	};

	return dfs(1, nums.length - 2);
};
