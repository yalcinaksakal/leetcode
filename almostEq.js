/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	const ch = {};
	for (const c of s2) ch[c] ? ch[c]++ : (ch[c] = 1);
	for (const c of s1)
		if (ch[c]) ch[c]--;
		else return false;

	let inEq = 0;
	for (let i = 0; i < s1.length; i++) {
		s1[i] !== s2[i] && inEq++;
		if (inEq > 2) return false;
	}

	return true;
};
