/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops1 = function (distance, start, destination) {
	const preSum = { [-1]: 0 };
	for (let i = 0; i < distance.length; i++)
		preSum[i] = preSum[i - 1] + distance[i];
	const right =
			preSum[Math.max(start, destination) - 1] -
			preSum[Math.min(start, destination) - 1],
		left = preSum[distance.length - 1] - right;
	return Math.min(right, left);
};
var distanceBetweenBusStops = function (distance, start, destination) {
	let right = 0;
	const path = [start, destination].sort((a, b) => a - b),
		sum = distance.reduce((acc, cur, i) => {
			if (i >= path[0] && i < path[1]) right += cur;
			return acc + cur;
		}, 0);
	return Math.min(right, sum - right);
};
distanceBetweenBusStops([1, 2, 3, 4], 0, 3);
