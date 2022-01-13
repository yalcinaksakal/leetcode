/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
	const map = {};
	let res = s.length;
	for (const ch of s) map[ch] ? map[ch]++ : (map[ch] = 1);
	for (const ch of t)
		if (map[ch]) {
			map[ch]--;
			res--;
		}

	return res;
};
