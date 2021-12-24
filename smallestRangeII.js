/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeII = (nums, k) => {
	nums.sort((a, b) => a - b);
	const l = nums.length - 1;
	let minDif = nums[l] - nums[0],
		max,
		min;
	for (let i = 0; i < l; i++) {
		max = Math.max(nums[i] + k, nums[l] - k);
		min = Math.min(nums[i + 1] - k, nums[0] + k);
		minDif = Math.min(minDif, max - min);
	}
	return minDif;
};

console.log(smallestRangeII([1, 2, 3, 4, 5, 7], 3));
