/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let l = 0,
		r = 0,
		res = 0;

	for (const ch of s) {
		ch == "L" ? l++ : r++;
		if (l == r) {
			res++;
			l = 0;
			r = 0;
		}
	}
	return res;
};
