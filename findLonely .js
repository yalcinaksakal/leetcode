/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
	const freq = {};
	for (const num of nums) freq[num] ? freq[num]++ : (freq[num] = 1);
	return nums.filter(num => freq[num] == 1 && !freq[num - 1] && !freq[num + 1]);
};
