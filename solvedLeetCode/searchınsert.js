/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   if (!nums.length) return 0;
//   for (let i = 0; i < nums.length; i++) if (nums[i] >= target) return i;
//   return nums.length;
// };
const searchInsert = function (nums, target) {
	let low = 0,
		mid,
		high = nums.length - 1;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (nums[mid] < target) low = mid + 1;
		else high = mid;
	}

	if (low === nums.length - 1 && nums[low] < target) low++;
	return low;
};

console.log(searchInsert([1, 3, 5, 6], 7));
