/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function (recs, points) {
	const widths = Array(recs.length)
			.fill()
			.map((_, i) => i),
		heights = Array(recs.length)
			.fill()
			.map((_, i) => i),
		binarySearch = (val, arr, axis) => {
			let low = 0,
				mid,
				high = arr.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				recs[arr[mid]][axis] < val ? (low = mid + 1) : (high = mid);
			}
			recs[arr[low]][axis] < val && low++;
			return arr.slice(0, low);
		},
		res = [];
	widths.sort((a, b) => recs[a][0] - recs[b][0]);
	heights.sort((a, b) => recs[a][1] - recs[b][1]);
	for (const [x, y] of points)
		res.push(
			recs.length -
				new Set([...binarySearch(x, widths, 0), ...binarySearch(y, heights, 1)])
					.size
		);
	return res;
};
console.log(
	countRectangles(
		[
			[4, 7],
			[4, 9],
			[8, 5],
			[6, 2],
			[6, 4],
		],
		[
			[4, 2],
			[5, 6],
		]
	)
);
