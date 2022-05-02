/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	let i = s.length - 1,
		j = t.length - 1;

	const next = (i, s) => {
		let back = 0;
		while (back || s[i] === "#") back += s[i--] === "#" ? 1 : -1;
		return i;
	};

	while (i > -1 || j > -1) {
		i = next(i, s);
		j = next(j, t);
		if (s[i--] !== t[j--]) return false;
	}
	return true;
};
backspaceCompare("#####b", "b#b");
