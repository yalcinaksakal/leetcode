/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
	let res = 0;
	const isAdded = {};
	for (const num of nums)
		if (isAdded[num] == undefined) {
			res += num;
			isAdded[num] = true;
		} else if (isAdded[num]) {
			res -= num;
			isAdded[num] = false;
		}

	return res;
};
