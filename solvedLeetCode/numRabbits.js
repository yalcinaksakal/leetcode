/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
	const colors = {};
	for (const a of answers) colors[a] ? colors[a]++ : (colors[a] = 1);

	let min = 0;

	for (const color of Object.keys(colors))
		min += (+color + 1) * Math.ceil(colors[color] / (+color + 1));

	return min;
};
