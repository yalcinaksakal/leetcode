/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
	nums.push(1);
	nums.unshift(1);

	const map = {};
	let coins;

	const dfs = (l, r) => {
		if (l > r) return 0;
		if (map[[l, r]]) return map[[l, r]];
		map[[l, r]] = 0;
		for (let i = l; i <= r; i++) {
			coins = nums[l - 1] * nums[i] * nums[r + 1];
			coins += dfs(l, i - 1) + dfs(i + 1, r);
			map[[l, r]] = Math.max(coins, map[[l, r]]);
		}
		return map[[l, r]];
	};

	return dfs(1, nums.length - 2);
};
