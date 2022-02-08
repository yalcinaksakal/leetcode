/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	const freq = {};
	for (const num of nums) freq[num] ? freq[num]++ : (freq[num] = 1);

	return Object.values(freq).reduce(
		(acc, cur) => acc + (cur * (cur - 1)) / 2,
		0
	);
};
