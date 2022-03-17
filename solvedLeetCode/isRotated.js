/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
	let isRotated = false;
	for (let i = 1; i < nums.length; i++)
		if (nums[i] < nums[i - 1]) {
			if (isRotated) return false;
			isRotated = true;
		}

	return isRotated ? nums[nums.length - 1] <= nums[0] : true;
};
