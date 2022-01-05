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
		while (back || s[i] === "#") {
			back += s[i] === "#" ? 1 : -1;
			i--;
		}
		return i;
	};

	while (i > -1 || j > -1) {
		if (s[i] === "#") i = next(i, s);
		if (t[j] === "#") j = next(j, t);

		if (s[i] !== t[j]) return false;
		i--;
		j--;
	}
	return true;
};

console.log(backspaceCompare("bbbextm", "bbb#extm"));
