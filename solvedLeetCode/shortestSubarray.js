/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
	const sum = Array(nums.length)
		.fill()
		.map(() => ({}));
	let j;
	for (let l = 1; l <= nums.length; l++)
		for (let i = 0; i < nums.length - l + 1; i++) {
			j = i + l - 1;
			sum[i][j] = (sum[i][j - 1] ? sum[i][j - 1] : 0) + nums[j];
			if (sum[i][j] >= k) return l;
		}

	return -1;
};

shortestSubarray([2, -1, 2], 3);
