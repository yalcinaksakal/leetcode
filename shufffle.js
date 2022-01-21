/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const quickSort = (left, right) => {
		let pivot = left,
			tmp;

		const swap = (i, j) => {
			tmp = nums[i];
			nums[i] = nums[pivot];
			nums[pivot++] = tmp;
		};

		for (let i = left; i <= right; i++) {
			if (nums[i] < nums[right]) {
				tmp = nums[i];
				nums[i] = nums[pivot];
				nums[pivot++] = tmp;
			}
		}
	};
};
