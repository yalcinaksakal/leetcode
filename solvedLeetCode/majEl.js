/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let count = 1;
	const l = nums.length / 2;

	nums.sort((a, b) => a - b);

	for (let i = 1; i < nums.length + 1; i++) {
		nums[i] === nums[i - 1] ? count++ : (count = 1);
		if (count > l) return nums[i - 1];
	}
};
