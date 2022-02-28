/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
	const preSum = {};
	let sum = 0,
		count = 0;
	preSum[0] = 1;
	for (const num of nums) {
		sum += num;
		preSum[sum] ? preSum[sum]++ : (preSum[sum] = 1);
	}
	if (!goal) {
		return Object.values(preSum).reduce((a, c) => a + (c * (c - 1)) / 2, 0);
	}
	while (sum - goal > -1) {
		count += preSum[sum] * preSum[sum - goal];
		sum--;
	}
	return count;
};
console.log(
	numSubarraysWithSum([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1], 0)
);
