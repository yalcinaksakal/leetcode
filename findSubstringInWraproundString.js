/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
	const longest = {};
	let length, dif;
	for (let i = 0; i < p.length; i++) {
		dif = p.charCodeAt(i) - p.charCodeAt(i - 1);
		dif === 1 || dif === -25 ? length++ : (length = 1);
		if (!longest[p[i]] || length > longest[p[i]]) longest[p[i]] = length;
	}
	return Object.values(longest).reduce((a, c) => a + c, 0);
};
