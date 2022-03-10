/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
	const res = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "#") continue;
		res.push(+(s[i] + (s[i + 2] === "#" ? s[++i] : "")) + 96);
	}
	return String.fromCharCode(...res);
};
