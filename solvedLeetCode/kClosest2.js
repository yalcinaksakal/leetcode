/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) =>
	points
		.map((p, i) => ({ d: p[0] ** 2 + p[1] ** 2, i }))
		.sort((a, b) => a.d - b.d)
		.filter((_, i) => i < k)
		.map(p => points[p.i]);
