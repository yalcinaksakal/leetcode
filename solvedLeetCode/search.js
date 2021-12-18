/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	const length = nums.length;

	const binarySearch = (target = undefined, k = 0) => {
		let low = 0,
			mid,
			high = length - 1;

		const check = () =>
			target === undefined
				? nums[mid] > nums[high]
				: nums[(k + mid) % length] < target;

		while (low < high) {
			mid = (low + high) >>> 1;
			if (check()) low = mid + 1;
			else high = mid;
		}
		return target === undefined ? low : (k + low) % length;
	};

	const index = binarySearch(target, binarySearch());

	return nums[index] === target ? index : -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
