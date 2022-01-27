/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
	const w = [],
		freq = {};
	let i = 0,
		max = 0,
		min = nums[0],
		res = 0,
		val;

	while (i < nums.length) {
		w.push(nums[i]);
		freq[nums[i]] ? freq[nums[i]]++ : (freq[nums[i]] = 1);
		max = Math.max(max, nums[i]);
		min = Math.min(min, nums[i++]);
		while (max - min > limit && w.length) {
			val = w.shift();
			freq[val]--;
			if (freq[val]) continue;
			val == max && (max = Math.max.apply(null, w));
			val == min && (min = Math.min.apply(null, w));
		}
		res = Math.max(res, w.length);
	}
	return res;
};
