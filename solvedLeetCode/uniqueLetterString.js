/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
	let count = 0,
		sub;
	for (let i = 0; i < s.length; i++) {
		const freq = {};
		sub = 0;
		for (let j = i; j < s.length; j++) {
			if (freq[s[j]] === undefined) {
				freq[s[j]] = true;
				sub++;
			} else if (freq[s[j]]) {
				sub--;
				freq[s[j]] = false;
			}

			count += sub;
		}
	}
	return count;
};

uniqueLetterString("ABA");
