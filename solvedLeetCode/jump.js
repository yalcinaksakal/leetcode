/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let l = nums.length - 1;
	let reachable = l;

	while (l > 1) {
		l--;
		if (nums[l] + l >= reachable) reachable = l;
	}

	return nums[0] >= reachable;
};
