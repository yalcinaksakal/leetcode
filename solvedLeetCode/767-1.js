/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
	let charFreq = {},
		res = "",
		index,
		newCh;
	const move = i => {
		let tmp;
		for (; i < charFreq.length; i++)
			if (charFreq[i][1] > charFreq[i - 1][1]) {
				tmp = [...charFreq[i]];
				charFreq[i] = charFreq[i - 1];
				charFreq[i - 1] = tmp;
			} else break;
	};
	for (const ch of s) charFreq[ch] ? charFreq[ch]++ : (charFreq[ch] = 1);
	charFreq = Object.entries(charFreq).sort((a, b) => b[1] - a[1]);

	for (let i = 0; i < s.length; i++) {
		if (charFreq[0][0] === newCh) {
			if (charFreq.length === 1) return "";
			newCh = charFreq[1][0];
			index = 1;
		} else {
			newCh = charFreq[0][0];
			index = 0;
		}
		res += newCh;
		--charFreq[index][1] ? move(index + 1) : charFreq.splice(index, 1);
	}
	return res;
};

reorganizeString("aaasdffffssssfssss");
