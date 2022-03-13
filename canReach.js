/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
	if (!arr[start]) return true;
	const n = arr.length,
		bfs = [start],
		visited = {},
		check = i => {
			if (i >= n || i <= -1 || visited[i]) return false;
			if (!arr[i]) return true;
			visited[i] = true;
			bfs.push(i);
			return false;
		};
	visited[start] = true;
	let i = -1;
	while (++i < bfs.length)
		if (check(bfs[i] + arr[bfs[i]]) || check(bfs[i] - arr[bfs[i]])) return true;
	return false;
};
console.log(canReach([3, 0, 2, 1, 2], 2));
