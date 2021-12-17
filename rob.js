/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (!nums.length) return 0;

	nums.push(0);

	for (let i = nums.length - 4; i > -1; i--)
		nums[i] += nums[i + 2] > nums[i + 3] ? nums[i + 2] : nums[i + 3];

	return nums[0] > nums[1] ? nums[0] : nums[1];
};

console.log(rob([2, 7, 9, 3, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function (nums) {
	let sum = 0,
		max = 0;

	const dfs = start => {
		for (let i = start; i < nums.length; i++) {
			sum += nums[i];

			max = Math.max(sum, max);

			dfs(i + 2);

			sum -= nums[i];
		}
	};

	dfs(0);

	return max;
};
