/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
	let res = "",
		i = 0,
		ch;
	const chars = "abc";

	const getChar = (a, b) => {
		for (const ch of chars) if (ch != a && ch !== b) return ch;
	};

	while (i < s.length) {
		if (s[i] != "?") res += s[i++];
		ch = i ? s[i - 1] : "";
		while (s[i] == "?") {
			ch = getChar(ch, ++i != s.length ? s[i] : "");
			res += ch;
		}
	}
	return res;
};
console.log(modifyString("j?qg??b"));
