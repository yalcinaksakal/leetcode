/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	people.sort((a, b) => {
		if (a[0] > b[0]) return -1;
		if (a[0] === b[0] && a[1] < b[1]) return -1;
		return 0;
	});
	const res = [];
	for (const p of people)
		p[1] === res.length ? res.push(p) : res.splice(p[1], 0, p);
	return res;
};
reconstructQueue([
	[7, 0],
	[4, 4],
	[7, 1],
	[5, 0],
	[6, 1],
	[5, 2],
]);
