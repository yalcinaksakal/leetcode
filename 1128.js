/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
	const seen = {};
	let res = 0,
		key;
	for (const [a, b] of dominoes) {
		key = a < b ? a + "," + b : b + "," + a;
		seen[key] ? (res += seen[key]++) : (seen[key] = 1);
	}
	return res;
};
console.log(
	numEquivDominoPairs([
		[1, 2],
		[2, 1],
		[2, 1],
		[3, 4],
		[5, 6],
	])
);
