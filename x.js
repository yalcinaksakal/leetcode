/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	const charsOfP = {},
		n = p.length,
		res = [];
	for (const ch of p) charsOfP[ch] ? charsOfP[ch]++ : (charsOfP[ch] = 1);
	let w = 0;
	for (let i = 0; i < n; i++) {
		if (charsOfP[s[i]]) w++;
		if (charsOfP[s[i]] != undefined) charsOfP[s[i]]--;
	}

	if (w == n) res.push(0);

	for (let i = n; i < s.length; i++) {
		if (charsOfP[s[i - n]] != undefined) charsOfP[s[i - n]]++;
		if (charsOfP[s[i - n]]) w--;
		if (charsOfP[s[i]]) w++;
		if (charsOfP[s[i]] != undefined) charsOfP[s[i]]--;

		if (w == n) res.push(i - n + 1);
	}
	return res;
};
findAnagrams("abacbabc", "abc");
