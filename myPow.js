/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	if (!x) return 0;
	if (!n) return 1;
	if (n < 0) {
		x = 1 / x;
		n *= -1;
	}
	let res = x;
	let pow = 1;
	while (2 * pow <= n) {
		res *= res;
		pow *= 2;
	}
	res *= myPow(x, n - pow);
	return res;
};
