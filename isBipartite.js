/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
	const sets = Array(graph.length).fill(0);
	let node;

	for (let i = 0; i < sets.length; i++) {
		if (!graph[i].length || sets[i]) continue;
		const que = [i];
		sets[i] = 1;
		while (que.length) {
			node = que.shift();
			for (const n of graph[node])
				if (!sets[n]) {
					sets[n] = -1 * sets[node];
					que.push(n);
				} else if (sets[n] != -1 * sets[node]) return false;
		}
	}
	return true;
};

isBipartite([[4], [], [4], [4], [0, 2, 3]]);
