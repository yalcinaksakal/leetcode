var merge = function (intervals) {
	const map = {};

	for (const [s, e] of intervals) if (!map[s] || map[s] < e) map[s] = e;

	const res = [];

	for (let [s, e] of Object.entries(map)) {
		if (!map[s]) continue;

		for (let i = +s + 1; i < e + 1; i++)
			if (map[i]) {
				if (map[i] > e) {
					map[s] = map[i];
					e = map[i];
				}
				delete map[i];
			}

		res.push([s, e]);
	}

	for (const e of Object.entries(map)) res.push(e);

	return res;
};

merge([
	[1, 3],
	[2, 6],
	[8, 10],
	[14, 17],
	[15, 18],
	[1, 4],
	[12, 18],
	[4, 5],
	[20, 27],
	[10, 12],
]);
