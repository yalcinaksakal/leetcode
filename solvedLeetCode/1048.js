/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
	let max = 1;
	const wordsByLength = {},
		chainCountOfWord = {},
		compare = (word, nextWord) => {
			let i = 0,
				equals = 0;
			for (let j = 0; j < nextWord.length; j++)
				if (nextWord[j] === word[i]) {
					i++;
					equals++;
				}
			if (equals === word.length) {
				chainCountOfWord[nextWord] = chainCountOfWord[word] + 1;
				max = Math.max(max, chainCountOfWord[nextWord]);
			}
		},
		countChain = wordLength => {
			if (!wordsByLength[wordLength] || !wordsByLength[wordLength + 1]) return;
			wordsByLength[wordLength].forEach(word => {
				wordsByLength[wordLength + 1].forEach(nextWord => {
					if (chainCountOfWord[word] + 1 > chainCountOfWord[nextWord])
						compare(word, nextWord);
				});
			});
		};

	for (const word of words) {
		chainCountOfWord[word] = 1;
		wordsByLength[word.length]
			? wordsByLength[word.length].add(word)
			: (wordsByLength[word.length] = new Set([word]));
	}
	for (let i = 1; i < 16; i++) countChain(i);
	return max;
};
longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]);
