/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	let isInc;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] == nums[i - 1]) continue;
		if (isInc == undefined) isInc = nums[i] > nums[i - 1];
		if (isInc && nums[i] < nums[i - 1]) return false;
		if (!isInc && nums[i] > nums[i - 1]) return false;
	}

	return true;
};
