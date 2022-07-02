/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	const bs = (low, high) => {
		let mid;
		while (low < high) {
			mid = (low + high) >>> 1;
			if (nums[mid] === nums[high])
				return Math.min(bs(0, mid), bs(mid + 1, high));
			nums[mid] > nums[high] ? (low = mid + 1) : (high = mid);
		}
		return nums[low];
	};
	return bs(0, nums.length - 1);
};
console.log(findMin([10, 10, 10, 10, 1, 10, 10, 10]));
console.log(findMin([3, 3, 1, 3]));
console.log(findMin([3, 3, 3]));
