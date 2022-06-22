/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k, left = 0, right = nums.length - 1) {
	let pivot = left;

	const swap = (i, inc = 1) => {
		const tmp = nums[i];
		nums[i] = nums[pivot];
		nums[pivot] = tmp;
		pivot += inc;
	};

	for (let i = left; i < right; i++) if (nums[i] < nums[right]) swap(i);
	swap(right, 0);

	const count = right - pivot + 1;
	return count == k
		? nums[pivot]
		: count > k
		? findKthLargest(nums, k, pivot + 1, right)
		: findKthLargest(nums, k - count, left, pivot - 1, k - count);
};
