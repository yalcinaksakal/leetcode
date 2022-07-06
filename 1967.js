/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = (patterns, word) =>
	patterns.reduce(
		(acc, cur) => (word.split(cur).length > 1 ? acc + 1 : acc),
		0
	);
