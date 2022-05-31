/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
	const subs = new Set(),
		last = s.length - k + 1;
	for (let i = 0; i < last; i++) subs.add(s.slice(i, i + k));
	return subs.size === 2 ** k;
};
