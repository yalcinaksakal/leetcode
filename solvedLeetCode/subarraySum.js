/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	const sums = {};
	let newSum;
	sums[0] = 0;

	for (const num of nums) {
		for (const sum of Object.keys(sums)) {
			newSum = +sum + num;
			sums[newSum] == undefined ? (sums[newSum] = 1) : sums[newSum]++;
		}
	}
	return sums[k] ? sums[k] : 0;
};
subarraySum([1, -1, 0], 2);
