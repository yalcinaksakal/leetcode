/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	const n = isConnected.length;
	const visited = new Set();
	let res = 0;

	const dfs = i => {
		visited.add(i);
		for (let j = 0; j < n; j++)
			if (!visited.has(j) && isConnected[i][j]) dfs(j);
	};

	for (let i = 0; i < n; i++)
		if (!visited.has(i)) {
			res++;
			dfs(i);
		}

	return res;
};
