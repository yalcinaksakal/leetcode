/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
	const freq = [];
	for (const w of words) {
		const wf = {};
		for (const c of w) wf[c] ? wf[c]++ : (wf[c] = 1);
		freq.push(wf);
	}

	const res = [];
	if (!freq.length) return res;
	for (const c of Object.keys(freq[0])) {
		let min = freq[0][c];
		for (let i = 1; i < freq.length; i++)
			if (!freq[i][c]) {
				min = 0;
				break;
			} else min = Math.min(min, freq[i][c]);
		for (let i = 0; i < min; i++) res.push(c);
	}
	return res;
};
commonChars(["cool", "lock", "cook"]);
