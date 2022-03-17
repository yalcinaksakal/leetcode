/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
	const split = str => str.replace(/[aeiouAEIOU]/g, "").length;
	return split(s.slice(0, s.length / 2)) === split(s.slice(s.length / 2));
};
