/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
	const rows = {},
		cols = {},
		visited = {};
	let res = 0;

	for (let i = 0; i < stones.length; i++) {
		const [x, y] = stones[i];
		rows[x] ? rows[x].push(i) : (rows[x] = [i]);
		cols[y] ? cols[y].push(i) : (cols[y] = [i]);
	}

	const bfs = i => {
		const arr = [i];
		let j = 0;
		while (j < arr.length) {
			if (!visited[arr[j]]) {
				visited[arr[j]] = 1;
				const [x, y] = stones[arr[j]];
				if (rows[x]) {
					arr.push(...rows[x]);
					rows[x] = 0;
				}
				if (cols[y]) {
					arr.push(...cols[y]);
					cols[y] = 0;
				}
			}
			j++;
		}
		return new Set(arr).size - 1;
	};

	for (let i = 0; i < stones.length; i++) !visited[i] && (res += bfs(i));
	return res;
};
console.log(
	removeStones([
		[0, 0],
		[0, 1],
		[1, 0],
		[1, 1],
		[2, 1],
		[2, 2],
		[3, 2],
		[3, 3],
		[3, 4],
		[4, 3],
		[4, 4],
	])
);
