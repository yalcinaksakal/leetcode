/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const w = {};
	let max = nums[0];
	nums.slice(0, k).forEach(num => {
		w[num] ? w[num]++ : (w[num] = 1);
		max = Math.max(max, num);
	});
	const res = [max];

	for (let i = k; i < nums.length; i++) {
		w[nums[i - k]]--;
		w[nums[i]] ? w[nums[i]]++ : (w[nums[i]] = 1);
		nums[i] > max && (max = nums[i]);
		if (!w[max]) max = Math.max(...nums.slice(i + 1 - k, i + 1));
		res.push(max);
	}
	return res;
};
