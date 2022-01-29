/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
	const pos = [],
		res = Array(s.length).fill(0);
	for (let i = 0; i < s.length; i++) s[i] == c && pos.push(i);
	for (let i = 0; i < s.length; i++) {
		if (s[i] == c) continue;
		res[i] = Math.abs(i - pos[0]);
		for (let j = 1; j < pos.length; j++)
			res[i] = Math.min(res[i], Math.abs(i - pos[j]));
	}
	return res;
};
