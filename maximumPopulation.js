/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
	let events = {},
		cur = 0,
		max = 0,
		res;
	for (const e of logs) {
		events[e[0]] ? events[e[0]]++ : (events[e[0]] = 1);
		events[e[1]] ? events[e[1]]-- : (events[e[1]] = -1);
	}
	events = Object.entries(events).sort((a, b) => +a[0] - b[0]);

	for (const e of events) {
		cur += e[1];
		if (cur > max) {
			res = e[0];
			max = cur;
		}
	}
	return res;
};

maximumPopulation([
	[1993, 1999],
	[2000, 2010],
]);
