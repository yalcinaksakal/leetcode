/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function (nums) {
	let target = nums.reduce((a, b) => a + b),
		newSum;

	if (target % 2) return false;

	target /= 2;
	const subsetSums = {};
	subsetSums[0] = true;

	for (const num of nums)
		for (const sum of Object.keys(subsetSums)) {
			newSum = +sum + num;
			if (newSum === target) return true;
			if (!subsetSums[newSum] && newSum < target) subsetSums[newSum] = true;
		}

	return false;
};
