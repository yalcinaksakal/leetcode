function arrayManipulation(n, queries) {
	// Write your code here
	let events = {},
		range = 0,
		max = 0;
	for (const q of queries) {
		events[q[0] - 1] ? (events[q[0] - 1] += q[2]) : (events[q[0] - 1] = q[2]);
		events[q[1]] ? (events[q[1]] -= q[2]) : (events[q[1]] = -q[2]);
	}
	events = Object.entries(events)
		.map(e => {
			e[0] = +e[0];
			return e;
		})
		.sort((a, b) => a[0] - b[0]);
	for (const ev of events) {
		range += ev[1];
		max = Math.max(max, range);
	}
	return max;
}
