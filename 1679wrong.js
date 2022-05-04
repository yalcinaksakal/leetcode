/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	const sums = { 0: 1 };
	let newSum;
	for (const num of nums) {
		const newSums = {};
		for (let sum of Object.keys(sums)) {
			sum = +sum;
			if (sum > k) break;
			newSum = num + sum;
			if (newSum > k) continue;
			newSums[newSum]
				? (sums[newSum] += sums[sum])
				: (newSums[newSum] = sums[sum]);
		}
		for (const sum of Object.keys(newSums))
			sums[sum] ? (sums[sum] += newSums[sum]) : (sums[sum] = newSums[sum]);
	}
	return sums[k];
};
console.log(maxOperations([3, 1, 3, 4, 3], 6));
