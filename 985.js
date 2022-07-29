/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
	let evenSum = nums.reduce((acc, cur) => (cur % 2 ? acc : acc + cur), 0);
	const res = [];
	for (const [val, index] of queries) {
		!(nums[index] % 2) && (evenSum -= nums[index]);
		nums[index] += val;
		!(nums[index] % 2) && (evenSum += nums[index]);
		res.push(evenSum);
	}
	return res;
};
