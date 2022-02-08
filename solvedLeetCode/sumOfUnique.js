/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
	let sum = 0;
	const map = {};
	for (const num of nums) {
		if (map[num] != undefined) {
			map[num] && (sum -= num);
			map[num] = 0;
		} else {
			sum += num;
			map[num] = 1;
		}
	}
	return sum;
};
