/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
	events.sort((a, b) => {
		if (a[1] < b[1]) return -1;
		if (b[1] == a[1] && a[0] < b[0]) return -1;
	});

	const days = {};
	let res = 0;

	for (let [s, e] of events)
		while (s <= e)
			if (!days[s++]) {
				res++;
				days[s - 1] = 1;
				break;
			}

	return res;
};
console.log(
	maxEvents([
		[1, 5],
		[3, 5],
		[4, 5],
		[2, 3],
		[2, 3],
	])
);
