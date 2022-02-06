/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
	for (let i = 1; i <= n; ) if (!s.includes((i++).toString(2))) return false;
	return true;
};
