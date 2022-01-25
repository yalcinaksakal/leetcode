/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
	if (!n) return "0";
	let res = "",
		isNeg;
	while (n) {
		isNeg = n < 0;
		n = Math.abs(n);
		res = (n % 2) + res;
		n = Math.floor(n / 2) + (isNeg && n % 2 ? 1 : 0);
		!isNeg && (n *= -1);
	}
	return res;
};
