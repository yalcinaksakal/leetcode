/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	const map = {};
	intervals.push(newInterval);

	for (const [s, e] of intervals) if (!map[s] || map[s] < e) map[s] = e;

	for (let [s, e] of Object.entries(map)) {
		for (let i = +s + 1; i < e + 1; i++)
			if (map[i]) {
				if (map[i] > e) {
					map[s] = map[i];
					e = map[i];
				}
				delete map[i];
			}
	}

	const res = [];

	for (const [k, v] of Object.entries(map)) res.push([+k, v]);
	console.log(res);
	return res;
};

insert(
	[
		[1, 2],
		[3, 5],
		[6, 7],
		[8, 10],
		[14, 16],
	],
	[11, 13]
);
