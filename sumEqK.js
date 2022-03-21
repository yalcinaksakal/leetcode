/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let sum = 0,
		count = 0;
	const preSum = [],
		map = {};

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		preSum.push(sum);
		map[sum] ? map[sum].push(i) : (map[sum] = [i]);
	}

	for (let i = 0; i < nums.length; i++) {
		if (preSum[i] === k) count++;
		if (map[preSum[i] - k]) map[preSum[i] - k].forEach(j => j < i && count++);
	}

	return count;
};
