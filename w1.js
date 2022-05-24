/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
	let charFreq = {},
		res = "",
		index,
		newCh;
	for (const ch of s) charFreq[ch] ? charFreq[ch]++ : (charFreq[ch] = 1);
	charFreq = Object.entries(charFreq).sort((a, b) => b[1] - a[1]);
	while (charFreq.length > 1) {
		res += charFreq.reduce((acc, cur) => {
			cur[1]--;
			return acc + cur[0];
		}, "");
		while (!charFreq[charFreq.length - 1][1]) charFreq.pop();
	}
	if (charFreq.length) {
		if (charFreq[0][1] > 1) return "";
		res += charFreq[0][0];
	}
	return res;
};
console.log(reorganizeString("sssssssaaadddssssssss"));
