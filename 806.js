/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
	let lines = 1,
		cur = 0,
		px;
	for (let i = 0; i < s.length; i++) {
		px = widths[s.charCodeAt(i) - 97];
		if (cur + px <= 100) cur += px;
		else {
			lines++;
			cur = px;
		}
	}
	return [lines, cur];
};

numberOfLines(
	[
		10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10, 10, 10, 10, 10,
	],
	"abcdefghijklmnopqrstuvwxyz"
);
