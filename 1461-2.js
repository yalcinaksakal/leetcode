/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
	const subs = new Set();
	for (let i = 0, last = s.length - k + 1; i < last; i++)
		subs.add(s.slice(i, i + k));
	return subs.size === 2 ** k;
};
