/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (bW, eW, wL) {
	const res = [];
	if (!wL.includes(eW)) return res;

	const path = {},
		bfs = [[eW, -1]];
	let next,
		i = 0,
		canCont = true;
	path[eW] = true;
	if (wL.indexOf(bW) === -1) wL.push(bW);

	const getDif = (w1, w2) => {
		let dif = 0;
		for (let i = 0; i < w1.length; i++)
			if (w1[i] != w2[i] && dif++) return false;
		return true;
	};

	const getNeighbors = (w, prev) => {
		const n = [];
		for (let i = 0; i < wL.length; i++) {
			if (path[wL[i]]) continue;
			if (getDif(w, wL[i])) n.push([wL[i], prev]);
		}
		return n;
	};

	while (i < bfs.length && canCont) {
		bfs.push(null);
		const neighbors = [];
		while (bfs[i]) {
			next = bfs[i];
			if (next[0] == bW) {
				res.push(i);
				canCont = false;
			}
			canCont && neighbors.push(...getNeighbors(next[0], i));
			i++;
		}
		neighbors.forEach(n => {
			bfs.push(n);
			path[n[0]] = true;
		});
		i++;
	}

	return res.map(r => {
		const path = [bfs[r][0]];
		let next = bfs[r][1];
		while (next !== -1) {
			path.push(bfs[next][0]);
			next = bfs[next][1];
		}
		return path;
	});
};
console.log(
	findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(findLadders("a", "c", ["a", "b", "c"]));
