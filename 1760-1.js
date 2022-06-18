/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
	nums.sort((a, b) => b - a);
	const getOperations = maxSize => {
		let count = 0;
		for (let i = 0; nums[i] > maxSize; i++)
			count += Math.floor(nums[i] / maxSize) - (nums[i] % maxSize ? 0 : 1);
		return count;
	};
	let low = 1,
		high = nums[0],
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		getOperations(mid) > maxOperations ? (low = mid + 1) : (high = mid);
	}
	return low;
};
console.log(minimumSize([9], 2));
