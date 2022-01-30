/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (bW, eW, wL) {
	if (!wL.includes(eW)) return 0;

	const path = {},
		bfs = [eW];
	let next,
		step = 0;
	path[eW] = 1;
	wL.push(bW);

	const getDif = (w1, w2) => {
		let dif = 0;
		for (let i = 0; i < w1.length; i++)
			if (w1[i] != w2[i] && dif++) return false;
		return true;
	};

	const getNeighbors = w => {
		const n = [];
		for (let i = 0; i < wL.length; i++) {
			if (path[wL[i]]) continue;
			if (getDif(w, wL[i])) {
				n.push(wL[i]);
				path[wL[i]] = 1;
			}
		}
		return n;
	};

	while (bfs.length) {
		bfs.push(null);
		step++;
		while (bfs[0]) {
			next = bfs.shift();
			if (next == bW) return step;
			next = getNeighbors(next);
			if (!next.length) continue;
			bfs.push(...next);
		}
		bfs.shift();
	}

	return 0;
};
console.log(
	ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
