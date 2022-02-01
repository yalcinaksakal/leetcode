/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	const num = {};
	for (let i = 0; i < nums.length; i++) {
		if (num[nums[i]] && i + 1 - num[nums[i]] <= k) return true;
		num[nums[i]] = i + 1;
	}
	return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
