/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
	let sums = [0],
		sum,
		res = 0,
		zeros = 0;
	const newTarget = (nums.reduce((a, c) => a + c, 0) - target) / 2;
	if (newTarget !== Math.floor(newTarget)) return 0;
	for (const num of nums) {
		if (!num) {
			zeros++;
			continue;
		}
		const n = sums.length;
		for (let i = 0; i < n; i++) {
			sum = sums[i] + num;
			sum === newTarget ? res++ : sum < newTarget && sums.push(sum);
		}
	}
	return (newTarget ? res : 1) * 2 ** zeros;
};
console.log(findTargetSumWays([9, 7, 0, 3, 9, 8, 6, 5, 7, 6], 2));
