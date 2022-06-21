/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
	const lastDist = dist.pop();
	let lowSpeed = 1,
		highSpeed = 10 ** 7 + 1,
		mid;

	while (lowSpeed < highSpeed) {
		mid = (lowSpeed + highSpeed) >>> 1;
		dist.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0) + lastDist / mid >
		hour
			? (lowSpeed = mid + 1)
			: (highSpeed = mid);
	}
	return lowSpeed > 10 ** 7 ? -1 : lowSpeed;
};
