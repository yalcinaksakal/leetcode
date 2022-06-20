/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function (points, angle, location) {
	let pointsByAngle = {},
		pointAngle,
		i = 0,
		rangeStart = -1,
		rangeEnd = 0,
		max = 0,
		numberOfPointsAtMylocation = 0;
	const [x1, y1] = location,
		prefixSum = { [-1]: 0 },
		getAngle = (x2, y2) => {
			//if point is equal to my location, I have to add it to every range, because it is always visible
			if (x1 === x2 && y1 === y2) {
				numberOfPointsAtMylocation++;
				return false;
			}
			const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
			return angle < 0 ? angle + 360 : angle;
		};
	//aggregate points according to their angles with my location
	for (const point of points) {
		pointAngle = getAngle(...point);
		if (pointAngle === false) continue;
		pointsByAngle[pointAngle]
			? pointsByAngle[pointAngle][1]++
			: (pointsByAngle[pointAngle] = [pointAngle, 1]);
	}
	pointsByAngle = Object.values(pointsByAngle).sort((a, b) => a[0] - b[0]);
	if (!pointsByAngle.length) return numberOfPointsAtMylocation;
	//max range may start at last angle, so add points between last angle and last angle + angle
	const lastIndex = pointsByAngle.length - 1,
		circularLastAngle = (pointsByAngle[lastIndex][0] + angle) % 360;
	while (pointsByAngle[i][0] <= circularLastAngle)
		pointsByAngle.push([pointsByAngle[i][0] + 360, pointsByAngle[i++][1]]);
	//prefixSum
	for (i = 0; i < pointsByAngle.length; i++)
		prefixSum[i] = prefixSum[i - 1] + pointsByAngle[i][1];
	while (rangeStart++ < lastIndex) {
		pointAngle = pointsByAngle[rangeStart][0] + angle;
		while (pointsByAngle[rangeEnd] && pointsByAngle[rangeEnd][0] <= pointAngle)
			rangeEnd++;
		//number of points in the range
		max = Math.max(max, prefixSum[rangeEnd - 1] - prefixSum[rangeStart - 1]);
	}
	return max + numberOfPointsAtMylocation;
};
console.log(
	visiblePoints(
		[
			[2, 1],
			[2, 2],
			[3, 4],
			[1, 1],
			[0, 2],
			[0, 0],
			[2, 0],
			[0, 1],
		],
		90,
		[1, 1]
	)
);
console.log(
	visiblePoints(
		[
			[1, 1],
			[2, 2],
			[3, 3],
			[4, 4],
			[1, 2],
			[2, 1],
		],
		0,
		[1, 1]
	)
);
