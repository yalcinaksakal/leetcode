/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let zeros = 0,
		zeroIndex;
	const product = nums.reduce((acc, cur, i) => {
		if (!cur) {
			zeros++;
			zeroIndex = i;
			return acc;
		}
		return acc * cur;
	}, 1);

	if (zeros) {
		const res = Array(nums.length).fill(0);
		if (zeros < 2) res[zeroIndex] = product;
		return res;
	}
	return nums.map(num => product / num);
};
