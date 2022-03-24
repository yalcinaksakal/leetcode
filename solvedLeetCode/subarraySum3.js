/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let sum = 0,
		count = 0,
		diff;
	const preSum = { 0: 1 };

	for (const num of nums) {
		sum += num;
		diff = sum - k;
		preSum[diff] && (count += preSum[diff]);
		preSum[sum] ? preSum[sum]++ : (preSum[sum] = 1);
	}

	return count;
};
