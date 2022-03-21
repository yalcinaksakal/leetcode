/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
	const map = {},
		res = [];
	let begin = 0,
		end = 0;

	for (let i = 0; i < s.length; i++) map[s[i]] = i;

	for (let i = 0; i < s.length; i++) {
		end = Math.max(end, map[s[i]]);
		if (end === i || end === s.length - 1) {
			res.push(end - begin + 1);
			begin = i + 1;
			if (end === s.length - 1) break;
		}
	}

	return res;
};
