/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate3 = function (nums, k) {
	k %= nums.length;
	const rev = (i, j = nums.length - 1) => {
		while (i < j) {
			const t = nums[i];
			nums[i++] = nums[j];
			nums[j--] = t;
		}
	};
	rev(0);
	rev(0, k - 1);
	rev(k);
};

var rotate2 = function (nums, k) {
	k %= nums.length;
	nums.splice(0, 0, ...nums.splice(nums.length - k, k));
};

var rotate = function (nums, k) {
	k %= nums.length;
	for (let i = 0; i < k; i++) nums.unshift(nums.pop());
};
