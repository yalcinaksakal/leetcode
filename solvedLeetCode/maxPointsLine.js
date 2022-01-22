/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
	const slopes = {};

	let max = points.length > 1 ? 2 : 1,
		slope,
		k;

	for (let i = 1; i < points.length; i++)
		for (let j = 0; j < i; j++) {
			slope =
				points[i][0] == points[j][0]
					? "u" + points[i][0]
					: (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]);
			k = 0;
			if (!slopes[slope]) slopes[slope] = [{ points: new Set([i, j]), p: i }];
			else if (points[i][0] == points[j][0]) {
				slopes[slope][k].points.add(i);
				slopes[slope][k].points.add(j);
			} else {
				k = slopes[slope].findIndex(
					el =>
						slope ==
						(points[i][1] - points[el.p][1]) / (points[i][0] - points[el.p][0])
				);
				if (k == -1) {
					slopes[slope].push = { points: new Set([i, j]), p: i };
					k = slopes[slope].length - 1;
				} else {
					slopes[slope][k].points.add(i);
					slopes[slope][k].points.add(j);
				}
			}
			max = Math.max(max, slopes[slope][k].points.size);
		}

	return max;
};

console.log(
	maxPoints([
		[0, 0],
		[4, 5],
		[7, 8],
		[8, 9],
		[5, 6],
		[3, 4],
		[1, 1],
	])
);
