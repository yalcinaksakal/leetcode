/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
	const bs = (low, val) => {
		let mid,
			high = nums.length - 1;
		while (low < high) {
			mid = (low + high) >>> 1;
			nums[mid] < val ? (low = mid + 1) : (high = mid);
		}
		nums[low] < val && low++;
		return low;
	};
	let count = 0;
	nums.sort((a, b) => a - b);
	for (let i = 0, iLast = nums.length - 2; i < iLast; i++)
		for (let j = i + 1, jLast = nums.length - 1; j < jLast; j++)
			count += bs(j + 1, nums[i] + nums[j]) - j - 1;
	return count;
};
triangleNumber([2, 2, 3, 4]);
