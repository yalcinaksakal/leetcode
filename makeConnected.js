/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
	const networks = {},
		belongsTo = {};
	let network = 1,
		extraCables = 0,
		count = n,
		small,
		big;

	for (const [x, y] of connections)
		if (!belongsTo[x] && !belongsTo[y]) {
			count -= 2;
			belongsTo[x] = belongsTo[y] = network;
			networks[network++] = new Set([x, y]);
		} else if (belongsTo[x] && belongsTo[y]) {
			if (belongsTo[x] === belongsTo[y]) {
				extraCables++;
				continue;
			}
			if (networks[belongsTo[x]].size > networks[belongsTo[y]].size) {
				small = belongsTo[y];
				big = belongsTo[x];
			} else {
				small = belongsTo[x];
				big = belongsTo[y];
			}
			networks[small].forEach(p => {
				networks[big].add(p);
				belongsTo[p] = big;
			});
			delete networks[small];
		} else {
			count--;
			networks[belongsTo[x] ? belongsTo[x] : belongsTo[y]].add(
				belongsTo[x] ? y : x
			);
			belongsTo[belongsTo[x] ? y : x] = belongsTo[x]
				? belongsTo[x]
				: belongsTo[y];
		}
	count += Object.keys(networks).length;
	return extraCables >= count - 1 ? count - 1 : -1;
};
