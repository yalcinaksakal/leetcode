/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
	let char;
	const charFreq = Array(26).fill(0),
		res = [];
	for (let i = 0; i < s.length; i++) charFreq[s.charCodeAt(i) - 97]++;
	for (let i = 0; i < 27; i++) {
		char = String.fromCharCode(i + 97);
		for (let j = 0; j < charFreq[i]; j++)
			res[j] = res[j] ? (j % 2 ? char + res[j] : res[j] + char) : char;
	}

	return res.join("");
};
