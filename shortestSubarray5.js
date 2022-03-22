/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
	let sum = 0,
		que = [],
		lastShift,
		shortest = nums.length + 1;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		sum >= k && (shortest = Math.min(i + 1, shortest));
		lastShift = 0;
		while (que.length && sum - que[0][0] >= k) lastShift = que.shift();
		lastShift && (shortest = Math.min(shortest, i - lastShift[1]));
		while (que.length && que[que.length - 1][0] >= sum) que.pop();
		que.push([sum, i]);
	}

	return shortest === nums.length + 1 ? -1 : shortest;
};
shortestSubarray([17, 85, 93, -45, -21], 150);
shortestSubarray([2, -1, 2], 3);
