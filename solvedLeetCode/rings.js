/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
	const map = {};

	for (let i = 0; i < rings.length; i += 2) {
		if (map[rings[i + 1]]) map[rings[i + 1]].add(rings[i]);
		else map[rings[i + 1]] = new Set([rings[i]]);
	}

	return Object.values(map).reduce(
		(acc, cur) => (cur.size === 3 ? acc + 1 : acc),
		0
	);
};
