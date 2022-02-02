/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let i = 1,
		sum,
		rem = 0,
		res = "";

	const l1 = a.length,
		l2 = b.length;

	while (l1 - i >= 0 || l2 - i >= 0) {
		sum = l1 - i >= 0 ? +a[l1 - i] : 0;
		sum += l2 - i >= 0 ? +b[l2 - i] : 0;
		sum += rem;

		rem = sum > 1 ? 1 : 0;
		sum %= 2;
		res = sum + res;
		i++;
	}
	if (rem) res = 1 + res;
	return res;
};
