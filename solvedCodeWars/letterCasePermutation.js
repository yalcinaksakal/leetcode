/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	const res = [s.toLowerCase()],
		cur = [];
	let l;
	for (let i = 0; i < s.length; i++) {
		if (+s[i] < 10) continue;
		l = res.length;
		for (let j = 0; j < l; j++) {
			res.push(res[j].slice(0, i) + s[i].toUpperCase() + res[j].slice(i + 1));
		}
	}
	console.log(res);
	return res;
};

letterCasePermutation("a1b299AZaz");
