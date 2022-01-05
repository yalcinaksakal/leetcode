/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const res = [[]];
	let length;

	for (const num of nums) {
		length = res.length;
		for (let i = 0; i < length; i++) res.push([...res[i], num]);
	}

	return res;
};
