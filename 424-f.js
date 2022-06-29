var characterReplacement = function (s, k) {
	let maxFreq = 0,
		start = 0,
		res = 0,
		end = -1,
		windowLength = 0;
	const chFreq = Array(26).fill(0);
	while (++end < s.length) {
		maxFreq = Math.max(maxFreq, ++chFreq[s.charCodeAt(end) - 65]);
		windowLength++;
		if (windowLength - maxFreq > k) {
			chFreq[s.charCodeAt(start++) - 65]--;
			windowLength--;
			maxFreq = Math.max(...chFreq);
		} else res = Math.max(res, windowLength);
	}
	return res;
};
