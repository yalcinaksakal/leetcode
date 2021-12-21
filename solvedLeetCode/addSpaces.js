/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
	const letters = s.split("");
	let placed = 0;

	for (const space of spaces) {
		letters.splice(space + placed, 0, " ");
		placed++;
	}

	return letters.join("");
};

console.log(addSpaces("icodeinpython", [1, 5, 7, 9]));
