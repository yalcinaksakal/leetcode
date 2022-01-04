/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	let left = 0,
		right = nums.length - 1,
		i = 0;

	while (i <= right) {
		if (nums[i] === 0) {
			nums[i] = nums[left];
			nums[left] = 0;
			left++;
		} else if (nums[i] === 2) {
			nums[i] = nums[right];
			nums[right] = 2;
			right--;
			continue;
		}
		i++;
	}
};
