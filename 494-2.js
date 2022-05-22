/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
	let res = 0,
		zeros = 0;
	target =
		(nums.reduce((a, c) => {
			!c && zeros++;
			return a + c;
		}, 0) -
			target) /
		2;
	const dfs = (remaining, i) => {
		if (!remaining) res++;
		if (i < 0 || remaining <= 0) return;
		dfs(remaining, i - 1);
		nums[i] && dfs(remaining - nums[i], i - 1);
	};
	if (target !== Math.floor(target)) return 0;
	dfs(target, nums.length - 1);
	return (target ? res : 1) * 2 ** zeros;
};
