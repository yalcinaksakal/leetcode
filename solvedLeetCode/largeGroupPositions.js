/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
	const res = [];
	let start = 0;
	for (let i = 1; i <= s.length; i++)
		if (s[i] != s[i - 1]) {
			if (i - start > 2) res.push([start, i - 1]);
			start = i;
		}
	return res;
};
largeGroupPositions("aaabbb");
