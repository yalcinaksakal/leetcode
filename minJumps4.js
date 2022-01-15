/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
	const n = arr.length,
		map = {},
		visited = new Set([-1, 0]);
	let bfs = [0],
		step = 0,
		i,
		next;

	for (let i = 0; i < n; i++)
		map[arr[i]] ? map[arr[i]].add(i) : (map[arr[i]] = new Set([i]));

	const add = el => {
		if (!visited.has(el)) {
			next.add(el);
			visited.add(el);
		}
	};

	while (bfs.length) {
		next = new Set();
		while (bfs.length) {
			i = bfs.pop();
			if (i == n - 1) return step;
			add(i - 1);
			add(i + 1);
			if (map[arr[i]] != undefined) map[arr[i]].forEach(el => add(el));
			delete map[arr[i]];
		}
		step++;
		bfs = Array.from(next);
	}

	return -1;
};
console.log(minJumps([7, 7, 7, 7, 7, 7, 7, 7, 7, 11]));
