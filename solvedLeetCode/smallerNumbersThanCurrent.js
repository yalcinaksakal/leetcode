/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	const sorted = [...nums].sort((a, b) => a - b),
		map = {};
	map[sorted[0]] = 0;
	for (let i = 1; i < nums.length; i++)
		if (map[sorted[i]] == undefined) map[sorted[i]] = i;
	const res = [];
	for (const num of nums) res.push(map[num]);
	return res;
};
