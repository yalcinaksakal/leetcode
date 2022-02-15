/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
	const max = { v: nums[0], i: 0 },
		min = { v: nums[0], i: 0 };
	for (let i = 1; i < nums.length; i++)
		if (nums[i] > max.v) {
			max.v = nums[i];
			max.i = i;
		} else if (nums[i] < min.v) {
			min.v = nums[i];
			min.i = i;
		}
	if (max.i === min.i) return Math.min(max.i + 1, nums.length - max.i);
	return Math.min(
		Math.max(max.i, min.i) + 1,
		nums.length - Math.min(max.i, min.i),
		(max.i > min.i ? min.i : max.i) +
			1 +
			nums.length -
			(max.i < min.i ? min.i : max.i)
	);
};
