/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let maxFreq = 0,
		start = 0,
		res = 0,
		end = -1,
		windowLength = 0,
		index;
	const chFreq = Array(26).fill(0);
	while (++end < s.length) {
		index = s.charCodeAt(end) - 65;
		chFreq[index]++;
		maxFreq = Math.max(maxFreq, chFreq[index]);
		windowLength++;
		if (windowLength - maxFreq > k) {
			chFreq[s.charCodeAt(start++) - 65]--;
			windowLength--;
			maxFreq = Math.max(...chFreq);
		} else res = Math.max(res, windowLength);
	}
	return res;
};
console.log(characterReplacement("abab", 2));
