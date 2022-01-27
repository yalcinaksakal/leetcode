/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n < 4) return n;
	let a = 2,
		b = 3;

	for (let i = 4; i <= n; i++) {
		b = a + b;
		a = b - a;
	}
	return b;
};
