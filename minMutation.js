/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
	const genes = {},
		bfs = [end],
		getDif = (g1, g2) => {
			let dif = 0;
			for (let i = 0; i < g1.length; i++)
				if (g1[i] != g2[i] && dif++) return false;
			return true;
		},
		getMutations = gene => {
			const n = [];
			const geneList = Object.keys(genes);
			for (let i = 0; i < geneList.length; i++) {
				if (getDif(gene, geneList[i])) {
					if (geneList[i] === start) return "found";
					n.push(geneList[i]);
					delete genes[geneList[i]];
				}
			}
			return n;
		};
	for (const gene of bank) genes[gene] = true;
	genes[start] = true;
	if (!genes[end]) return -1;
	if (start === end) return 0;
	delete genes[end];
	let next,
		step = 0;

	while (bfs.length) {
		bfs.push(null);
		step++;
		while (bfs[0]) {
			next = bfs.shift();
			next = getMutations(next);
			if (next === "found") return step;
			if (next.length) bfs.push(...next);
		}
		bfs.shift();
	}

	return -1;
};
console.log(
	minMutation("AAAAAAAA", "CCCCCCCC", [
		"AAAAAAAA",
		"AAAAAAAC",
		"AAAAAACC",
		"AAAAACCC",
		"AAAACCCC",
		"AACACCCC",
		"ACCACCCC",
		"ACCCCCCC",
		"CCCCCCCA",
	])
);
