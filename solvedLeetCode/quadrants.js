function quadrants(p, queries) {
	const getRegion = (x, y) => (x > 0 ? (y > 0 ? 0 : 3) : y > 0 ? 1 : 2),
		calc = (s, e) => {
			const sum = [0, 0, 0, 0];
			for (let i = s; i < e; i++) sum[p[i]]++;
			return sum.join(" ");
		},
		process = () => {
			events = Object.entries(events)
				.filter(e => e[1][0] || e[1][1])
				.sort((a, b) => {
					a[0] = +a[0];
					b[0] = +b[0];
					if (a[0] < b[0]) return -1;
					return 0;
				});
			if (!events.length) return;
			let x = 0,
				y = 0,
				e;
			for (let i = 0; i < events.length - 1; i++) {
				e = events[i][1];
				x = (x + e[0]) % 2;
				y = (y + e[1]) % 2;
				if (!x && !y) continue;
				for (let j = events[i][0]; j < events[i + 1][0]; j++) {
					if (x) p[j] = 3 - p[j];
					if (y) p[j] = (p[j] > 1 ? 5 : 1) - p[j];
				}
			}
			events = {};
		};
	let s,
		e,
		events = {};
	p = p.map(point => getRegion(...point));
	p.unshift(0);
	for (let q of queries) {
		q = q.split(" ");
		s = +q[1];
		e = +q[2] + 1;
		switch (q[0]) {
			case "X":
				if (!events[s]) events[s] = [0, 0];
				if (!events[e]) events[e] = [0, 0];
				events[s][0] = 1 - events[s][0];
				events[e][0] = 1 - events[e][0];
				break;
			case "Y":
				if (!events[s]) events[s] = [0, 0];
				if (!events[e]) events[e] = [0, 0];
				events[s][1] = 1 - events[s][1];
				events[e][1] = 1 - events[e][1];
				break;
			case "C":
				process();
				console.log(calc(s, e));
				break;
			default:
				break;
		}
	}
}
quadrants(
	[
		[1, 1],
		[-1, 1],
		[-1, -1],
		[1, -1],
	],

	["C 1 4", "X 2 4", "C 3 4", "Y 1 2", "C 1 3"]
);
