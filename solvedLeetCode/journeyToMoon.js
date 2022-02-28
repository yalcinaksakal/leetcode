function journeyToMoon(n, astronaut) {
	const belongsTo = {};
	let country = 1,
		countries = {},
		small,
		big;
	for (const [a1, a2] of astronaut)
		if (!belongsTo[a1] && !belongsTo[a2]) {
			belongsTo[a1] = belongsTo[a2] = country;
			countries[country++] = new Set([a1, a2]);
		} else if (belongsTo[a1] && belongsTo[a2]) {
			if (belongsTo[a1] === belongsTo[a2]) continue;
			if (countries[belongsTo[a1]].size > countries[belongsTo[a2]].size) {
				small = belongsTo[a2];
				big = belongsTo[a1];
			} else {
				small = belongsTo[a1];
				big = belongsTo[a2];
			}
			countries[small].forEach(p => {
				countries[big].add(p);
				belongsTo[p] = big;
			});
			delete countries[small];
		} else {
			countries[belongsTo[a1] ? belongsTo[a1] : belongsTo[a2]].add(
				belongsTo[a1] ? a2 : a1
			);
			belongsTo[belongsTo[a1] ? a2 : a1] = belongsTo[a1]
				? belongsTo[a1]
				: belongsTo[a2];
		}

	const singleAst = n - Object.keys(belongsTo).length,
		size = Object.values(countries).reduce((a, c) => a + c.size, 0);
	let count = 0,
		singles = 0;
	if (singleAst) singles = size * singleAst + (singleAst * (singleAst - 1)) / 2;
	countries = Object.values(countries).map(c => c.size);
	for (const c of countries) count += (size - c) * c;
	return count / 2 + singles;
}

console.log(
	journeyToMoon(10, [
		[0, 2],
		[1, 8],
		[1, 4],
		[2, 8],
		[2, 6],
		[3, 5],
		[6, 9],
	])
);
