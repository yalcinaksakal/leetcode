/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function (recs, points) {
	const recsAtHeight = Array(101)
			.fill()
			.map(() => []),
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
	for (const rec of recs) recsAtHeight[rec[1]].push(rec[0]);
	recsAtHeight.forEach(height => height.sort((a, b) => a - b));
	for (const [x, y] of points) {
		let count = 0;
		for (let i = 100; i >= y; i--)
			recsAtHeight[i].length && (count += bs(x, recsAtHeight[i]));
		res.push(count);
	}
	return res;
};
