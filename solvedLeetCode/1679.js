/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	const freq = {};
	for (const num of nums) freq[num] ? freq[num]++ : (freq[num] = 1);

	let res = 0;
	if (freq[k / 2]) {
		res += Math.floor(freq[k / 2] / 2);
		freq[k / 2] = 0;
	}
	for (const num of Object.keys(freq))
		if (freq[k - num]) {
			res += Math.min(freq[k - num], freq[num]);
			freq[num] = 0;
		}

	return res;
};
console.log(maxOperations([3, 1, 3, 4, 3], 6));
