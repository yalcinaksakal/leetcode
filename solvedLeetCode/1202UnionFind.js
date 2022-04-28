/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
	const n = s.length,
		roots = Array(n)
			.fill()
			.map((_, i) => i),
		groups = {},
		chars = {},
		find = v => {
			if (roots[v] !== v) roots[v] = find(roots[v]);
			return roots[v];
		},
		union = (u, v) => {
			const p1 = find(u),
				p2 = find(v);
			if (p1 !== p2) {
				roots[p2] = roots[p1];
				return true;
			}
			return false;
		},
		res = Array(n).fill("");
	let gr;
	for (const [a, b] of pairs) union(a, b);
	for (let i = 0; i < n; i++) {
		gr = find(i);
		groups[gr] ? groups[gr].push(i) : (groups[gr] = [i]);
		chars[gr] ? chars[gr].push(s[i]) : (chars[gr] = [s[i]]);
	}
	for (gr of Object.keys(groups)) {
		chars[gr].sort((a, b) => {
			if (a < b) return -1;
			return 1;
		});
		groups[gr].forEach((node, i) => (res[node] = chars[gr][i]));
	}

	return res.join("");
};
