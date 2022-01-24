/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	if (nums.length < 3) return nums;

	nums.sort((a, b) => a - b);
	const res = [];
	let check;

	for (let i = 0; i < nums.length; i++) {
		check = i ? nums[i] != nums[i - 1] : true;
		check &= i == nums.length - 1 ? true : nums[i] != nums[i + 1];
		if (check) res.push(nums[i]);
	}

	return res;
};
