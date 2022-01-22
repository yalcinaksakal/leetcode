/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = str => {
	let max = 0,
		ch = new Set(),
		s = 0,
		e = 0;

	while (e < str.length) {
		ch.has(str[e]) ? ch.delete(str[s++]) : ch.add(str[e++]);
		if (e - s > max) max = e - s;
	}

	return max;
};
