/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const map = {};
	for (const num of nums) map[num] = map[num] ? 0 : 1;
	for (const num of Object.keys(map)) if (map[num]) return +num;
};
