/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
	wordList = new Set(wordList);
	if (!wordList.has(endWord)) return 0;
	wordList.add(beginWord);
	wordList.delete(endWord);
	const bfs = [endWord],
		getDif = (w1, w2) => {
			let dif = 0;
			for (let i = 0; i < w1.length; i++)
				if (w1[i] !== w2[i] && dif++) return false;
			return true;
		},
		getNeighbors = w => {
			const n = [];
			for (const word of wordList)
				if (getDif(w, word)) {
					n.push(word);
					wordList.delete(word);
				}
			return n;
		};
	let step = 0,
		i = -1;
	while (++i < bfs.length) {
		bfs.push(null);
		step++;
		while (bfs[i]) {
			if (bfs[i] == beginWord) return step;
			bfs.push(...getNeighbors(bfs[i++]));
		}
	}
	return 0;
};
