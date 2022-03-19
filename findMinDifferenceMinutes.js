/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
	let minutes = {},
		min = 24 * 60;
	for (let t of timePoints) {
		t = t.split(":");
		t = +t[1] + +t[0] * 60;
		if (minutes[t]) return 0;
		minutes[t] = true;
	}
	minutes = Object.keys(minutes).map(m => +m);
	minutes.push(minutes[0] + 24 * 60);
	for (let i = 1; i < minutes.length; i++)
		min = Math.min(min, minutes[i] - minutes[i - 1]);

	return min;
};
findMinDifference(["05:31", "22:08", "00:35"]);
