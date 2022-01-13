// [[10,16],[2,8],[1,6],[7,12]]
// [[1,3],[2,6],[3,5],[5,7],[5,8],[7,9]]
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
	points.sort((a, b) => {
		if (a[0] > b[0]) return -1;
		if (a[0] == b[0]) return a[1] - b[1];
	});
	let res = 0,
		end,
		start,
		point;

	while (points.length) {
		res++;
		point = points.pop();
		end = point[1];
		start = point[0];
		while (points.length && end >= points[points.length - 1][0]) {
			point = points.pop();
			end = Math.min(end, point[1]);
			start = Math.max(start, point[0]);
		}
	}

	return res;
};
findMinArrowShots([
	[9, 12],
	[1, 10],
	[4, 11],
	[8, 12],
	[3, 9],
	[6, 9],
	[6, 7],
]);
