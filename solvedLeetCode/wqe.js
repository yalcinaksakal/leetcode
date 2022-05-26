/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
	let charFreq = {},
		res = "",
		index;
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
		index = charFreq[0][0] === res[res.length - 1] ? 1 : 0;
		if (index && charFreq.length === 1) return "";
		res += charFreq[index][0];
		--charFreq[index][1] ? move(index + 1) : charFreq.splice(index, 1);
	}
	return res;
};

reorganizeString("aaasdffffssssfssss");
