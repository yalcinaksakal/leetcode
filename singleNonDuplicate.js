/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	let low = 0,
		high = nums.length - 1,
		mid,
		dif;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1])
			return nums[mid];
		dif = nums[mid] == nums[mid - 1] ? 2 : 1;

		(mid - dif + 1) % 2 ? (high = mid - dif) : (low = mid + 1);
	}

	return nums[low];
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
