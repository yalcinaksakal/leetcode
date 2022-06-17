/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
	const mod = 10 ** 9 + 7;
	let n = arr.length,
		res = 0;
	arr.sort((a, b) => b - a);
	for (const num of arr) res = (res + n-- * num) % mod;
	return res;
};
