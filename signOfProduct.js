/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	let result = 1;
	for (const num of nums) {
		if (!num) return 0;
		if (num < 0) result *= -1;
	}
	return result;
};
