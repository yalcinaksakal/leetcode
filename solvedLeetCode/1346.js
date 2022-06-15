/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	const nums = {};
	for (const num of arr) {
		if (nums[num / 2] || nums[num * 2]) return true;
		nums[num] = true;
	}
	return false;
};
