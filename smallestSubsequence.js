/**
 * @param {string} s
 * @return {string}
 */
const smallestSubsequence = s => {
	const freq = {};
	for (const ch of s) freq[ch] ? freq[ch]++ : (freq[ch] = 1);
	let pos = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[pos] > s[i]) pos = i;
		if (!--freq[s[i]]) break;
	}

	return s.length
		? s[pos] + smallestSubsequence(s.slice(pos + 1).replaceAll(s[pos], ""))
		: "";
};
