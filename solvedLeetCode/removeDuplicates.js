/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length < 3) return nums.length;
	let j = 2;

	for (let i = 2; i < nums.length; i++)
		if (nums[i] !== nums[j - 2]) nums[j++] = nums[i];

	return j;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
