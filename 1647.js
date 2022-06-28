/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
	const charFreq = Array(26).fill(0),
		freq = {};
	for (let i = 0; i < s.length; i++) charFreq[s.charCodeAt(i) - 97]++;
	charFreq.sort((a, b) => a - b);
	for (const fr of charFreq) fr && (freq[fr] ? freq[fr]++ : (freq[fr] = 1));
	let count = 0;
	for (const fr of charFreq)
		if (freq[fr] > 1) {
			let curFr = fr;
			while (freq[curFr]) {
				curFr--;
				count++;
			}
			freq[fr]--;
			curFr && (freq[curFr] = 1);
		}
	return count;
};
minDeletions("aaabbbcc");
