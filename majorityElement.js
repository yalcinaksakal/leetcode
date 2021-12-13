/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	if (nums.length < 2) return nums[0];

	let count = 1;

	nums.sort((a, b) => a - b);

	for (let i = 1; i < nums.length + 1; i++) {
		if (nums[i] === nums[i - 1]) count++;
		else {
			if (count > nums.length / 2) return nums[i - 1];
			count = 1;
		}
	}
};
