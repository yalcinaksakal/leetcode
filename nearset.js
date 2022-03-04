/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
	points = points
		.map((p, i) => ({ p, i }))
		.filter((p, i) => p.p[0] === x || p.p[1] === y)
		.sort(
			(a, b) =>
				Math.abs(a.p[0] - x) +
				Math.abs(a.p[1] - y) -
				Math.abs(b.p[0] - x) -
				Math.abs(b.p[1] - y)
		);
	return points.length ? points[0].i : 0;
};
