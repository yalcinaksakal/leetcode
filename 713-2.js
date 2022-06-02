/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	if (!k) return 0;
	let start = 0,
		cur = 1,
		res = 0;
	for (let i = 0; i < nums.length; i++)
		if (nums[i] > k) {
			cur = 1;
			start = i + 1;
		} else {
			cur *= nums[i];
			while (cur >= k) cur /= nums[start++];
			start <= i && (res += i - start + 1);
		}
	return res;
};
