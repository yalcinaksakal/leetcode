/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	const subsets = [[]];
	const map = {};
	let subset, l;

	nums.sort((a, b) => a - b);

	for (const num of nums) {
		l = subsets.length;
		for (let i = 0; i < l; i++) {
			subset = [...subsets[i], num];
			if (!map[JSON.stringify(subset)]) {
				subsets.push(subset);
				map[JSon.stringify(subset)] = 1;
			}
		}
	}
	return subsets;
};
