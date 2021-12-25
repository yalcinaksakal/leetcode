/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
	let minSum = nums[0],
		maxSum = nums[0],
		curSumNegative = 0,
		curSumPositive = 0,
		total = 0;

	const getMin = () => {
		for (const num of nums) {
			if (curSumNegative > 0) curSumNegative = 0;
			if (curSumPositive < 0) curSumPositive = 0;
			curSumNegative += num;
			curSumPositive += num;
			total += num;
			if (curSumPositive > maxSum) maxSum = curSumPositive;
			if (curSumNegative < minSum) minSum = curSumNegative;
		}
	};

	getMin();

	return minSum === total ? maxSum : Math.max(total - minSum, maxSum);
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
