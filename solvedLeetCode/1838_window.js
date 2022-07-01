/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
	let max = 0,
		start = 0,
		sum = 0,
		length = 0;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		length++;
		if (nums[i] * length - sum > k) {
			sum -= nums[start++];
			length--;
		} else max = Math.max(max, length);
	}
	return max;
};
