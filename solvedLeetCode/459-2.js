/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
	const check = sub => s.split(sub).filter(part => part).length === 0;
	for (i = Math.trunc(s.length / 2); i > 0; i--)
		if (!(s.length % i) && check(s.slice(0, i))) return true;
	return false;
};
