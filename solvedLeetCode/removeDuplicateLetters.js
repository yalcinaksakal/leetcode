/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
	const freq = {},
		res = [];
	for (const ch of s) freq[ch] ? freq[ch]++ : (freq[ch] = 1);

	for (const ch of s) {
		freq[ch]--;
		if (res.includes(ch)) continue;
		while (res[res.length - 1] > ch && freq[res[res.length - 1]]) res.pop();
		res.push(ch);
	}

	return res.join("");
};
removeDuplicateLetters("cbacdacbc");
