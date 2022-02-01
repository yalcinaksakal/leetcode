/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
	if (n < 4) return n - 1;

	let res = 1;
	while (n % 3) {
		res *= 2;
		n -= 2;
	}

	return res * 3 ** (n / 3);
};

integerBreak(50);
