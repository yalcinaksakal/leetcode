/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let res = "";
	let w = "";
	for (const c of s) {
		if (c == " ") {
			w.length && (res = w + (res.length ? " " : "") + res);
			w = "";
			continue;
		}
		w += c;
	}
	w.length && (res = w + (res.length ? " " : "") + res);
	return res;
};

reverseWords("  hello world  ");
