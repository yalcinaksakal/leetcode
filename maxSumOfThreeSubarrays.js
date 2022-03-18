/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
	const sums = {},
		preMax = {};
	sums[0] = 0;
	for (let i = 0; i < k; i++) sums[0] += nums[i];
	let max = { val: sums[0], pos: 0 },
		res,
		sum,
		postMax;
	preMax[0] = { ...max };
	for (let i = 1; i < nums.length - k + 1; i++) {
		sums[i] = sums[i - 1] - nums[i - 1] + nums[i + k - 1];
		sums[i] > max.val && (max = { val: sums[i], pos: i });
		preMax[i] = { ...max };
	}

	postMax = { val: 0 };
	max = 0;
	for (let i = nums.length - 2 * k; i >= k; i--) {
		sums[i + k] >= postMax.val && (postMax = { val: sums[i + k], pos: i + k });
		sum = sums[i] + preMax[i - k].val + postMax.val;
		if (sum >= max) {
			max = sum;
			res = [preMax[i - k].pos, i, postMax.pos];
		}
	}

	return res;
};
maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2);
