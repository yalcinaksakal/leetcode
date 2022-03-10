/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = s => {
	let res = "",
		code;
	for (let i = 0; i < s.length; i++) {
		code = s.charCodeAt(i);
		res += code > 64 && code < 91 ? String.fromCharCode(code + 32) : s[i];
	}
	return res;
};
