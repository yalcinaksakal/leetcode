/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
	const chars = {};
	for (const c of "balon") chars[c] = 0;
	for (const c of text) chars[c] != undefined && chars[c]++;
	return Math.floor(
		Math.min(chars["b"], chars["a"], chars["l"] / 2, chars["o"] / 2, chars["n"])
	);
};
