/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
	let sum = 0,
		diff,
		res = nums.length + 1,
		nearest;
	const preSum = [[0, -1]];

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		diff = sum - k;
		nearest = preSum.length - 1;
		while (nearest > -1 && preSum[nearest][0] > diff) nearest--;
		preSum.push([sum, i]);
		nearest !== -1 && (res = Math.min(i - preSum[nearest][1], res));
		if (res === 1) return 1;
	}

	return res === nums.length + 1 ? -1 : res;
};
shortestSubarray([17, 85, 93, -45, -21], 150);
