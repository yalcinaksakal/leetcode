/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	if (n === 1 && !trust.length) return 1;

	const judges = {},
		trusters = new Set(),
		candidates = [];

	for (const [j, t] of trust) {
		judges[t] ? judges[t]++ : (judges[t] = 1);
		trusters.add(j);
		if (judges[t] === n - 1) candidates.push(t);
	}

	for (const c of candidates) if (!trusters.has(c)) return c;

	return -1;
};
