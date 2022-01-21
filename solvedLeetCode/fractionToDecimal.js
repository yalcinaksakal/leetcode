/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (n, d) {
	const remainder = {};
	let res = n / d >= 0 ? "" : "-";
	n = Math.abs(n);
	d = Math.abs(d);
	res += Math.floor(n / d);
	n = n % d;
	if (n) {
		res += ".";
		let pos = res.length;
		while (n) {
			n *= 10;
			if (remainder[n]) {
				res = res.slice(0, remainder[n]) + "(" + res.slice(remainder[n]) + ")";
				break;
			}
			remainder[n] = pos++;
			res += Math.floor(n / d);
			n = n % d;
		}
	}

	return res;
};
