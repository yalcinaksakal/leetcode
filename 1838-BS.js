/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
	const preSum = { [-1]: 0 },
		bs = index => {
			let low = 0,
				mid,
				high = index;
			while (low < high) {
				mid = (low + high) >>> 1;
				preSum[index] - preSum[mid - 1] + k < (index - mid + 1) * nums[index]
					? (low = mid + 1)
					: (high = mid);
			}
			return index - low + 1;
		};
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) preSum[i] = preSum[i - 1] + nums[i];
	let max = 1;
	for (let i = nums.length - 1; i > 0; i--) {
		if (max > i) break;
		nums[i] !== nums[i + 1] && (max = Math.max(max, bs(i)));
	}
	return max;
};
maxFrequency([2, 5], 5);
