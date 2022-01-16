/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
	const map = {};
	let tmp;

	for (let t of tickets) {
		if (t.includes("JFK")) {
			tmp = t[0] == "JFK" ? t[1] : t[0];
			t = ["JFK", tmp];
		}
		map[t[0]] ? map[t[0]].push(t[1]) : (map[t[0]] = [t[1]]);
	}

	const res = [],
		visited = {};

	const visit = from => {
		res.push(from);
		visited[from] = 1;
		if (!map[from]) return;
		map[from].sort();
		map[from].forEach(d => {
			if (!visited[d]) visit(d);
		});
	};
	console.log(map);
	visit("JFK");

	return res;
};

findItinerary([
	["MUC", "LHR"],
	["JFK", "MUC"],
	["SFO", "SJC"],
	["LHR", "SFO"],
]);
