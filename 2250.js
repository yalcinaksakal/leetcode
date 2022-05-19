/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function (recs, points) {
	const recsAtHeight = {},
		res = [],
		bs = (val, arr) => {
			let low = 0,
				mid,
				high = arr.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				arr[mid] < val ? (low = mid + 1) : (high = mid);
			}
			arr[low] < val && low++;
			return arr.length - low;
		};
	for (const rec of recs)
		recsAtHeight[rec[1]]
			? recsAtHeight[rec[1]].push(rec[0])
			: (recsAtHeight[rec[1]] = [rec[0]]);
	const heights = Object.keys(recsAtHeight).map(h => +h);
	heights.forEach(height => recsAtHeight[height].sort((a, b) => a - b));
	for (const [x, y] of points)
		res.push(
			heights.reduce(
				(acc, cur) => acc + (cur >= y ? bs(x, recsAtHeight[cur]) : 0),
				0
			)
		);
	return res;
};
console.log(
	countRectangles(
		[
			[1, 2],
			[2, 3],
			[2, 5],
		],
		[
			[2, 1],
			[1, 4],
		]
	)
);
