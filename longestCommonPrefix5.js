/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	const l = strs.length,
		getPrefix = s => {
			let i = 0;
			while (i < res.length && i < s.length && s[i] === res[i]) i++;
			return s.slice(0, i);
		};
	if (!l) return "";
	let res = strs[0];

	for (let i = 1; i < l; i++) {
		res = getPrefix(strs[i]);
		if (res == "") return res;
	}

	return res;
};
