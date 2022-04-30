/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
	const m = heights.length,
		n = heights[0].length,
		max = 10 ** 6 + 1,
		dir = { 1: [0, 1], 2: [0, -1], 3: [1, 0], 4: [-1, 0] },
		[efforts, eMax] = (() => {
			const efforts = [],
				isvalid = (i, j) => i > -1 && j > -1 && i < m && j < n;
			let nx,
				ny,
				eMax = 0,
				effort;
			for (let i = 0; i < m; i++) {
				efforts.push([]);
				for (let j = 0; j < n; j++) {
					const e = [];
					for (let d = 1; d < 5; d++) {
						nx = i + dir[d][0];
						ny = j + dir[d][1];
						if (isvalid(nx, ny)) {
							effort = Math.abs(heights[i][j] - heights[nx][ny]);
							eMax = Math.max(eMax, effort);
							e.push(effort);
						} else e.push(max);
					}
					efforts[i].push(e);
				}
			}
			return [efforts, eMax];
		})(),
		bfs = threshold => {
			const visited = {},
				arr = [[0, 0]];
			let i = -1,
				nx,
				ny;
			while (++i < arr.length) {
				const [x, y] = arr[i];
				for (let d = 1; d < 5; d++) {
					nx = x + dir[d][0];
					ny = y + dir[d][1];
					if (!visited[nx + "," + ny] && efforts[x][y][d - 1] <= threshold) {
						if (nx === m - 1 && ny === n - 1) return true;
						visited[nx + "," + ny] = true;
						arr.push([nx, ny]);
					}
				}
			}
			return false;
		};
	if (m === 1 && n === 1) return 0;
	let low = 0,
		high = eMax,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		bfs(mid) ? (high = mid) : (low = mid + 1);
	}
	return low;
};
console.log(
	minimumEffortPath([
		[1, 2, 2],
		[3, 8, 2],
		[5, 3, 5],
	])
);
