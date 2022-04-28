/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
	nums.sort((a, b) => a - b);
	const getNumberOfGreaterEl = x => {
		let low = 0,
			mid,
			high = nums.length;
		while (low < high) {
			mid = (low + high) >>> 1;
			if (nums[mid] < x) low = mid + 1;
			else high = mid;
		}
		return nums.length - low === x;
	};
	for (let i = 0; i < 1001; i++) if (getNumberOfGreaterEl(i)) return i;
	return -1;
};
specialArray([0, 8, 5, 11, 9, 2, 3, 2, 6]);
