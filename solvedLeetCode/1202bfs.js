/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
	const visited = {},
		n = s.length,
		res = Array(n).fill(""),
		graph = (() => {
			const g = {};
			for (const [a, b] of pairs) {
				!g[a] && (g[a] = new Set());
				!g[b] && (g[b] = new Set());
				g[a].add(b);
				g[b].add(a);
			}
			return g;
		})(),
		bfs = node => {
			if (visited[node]) return;
			const chars = [s[node]],
				bfsArr = [node];
			let i = -1;
			visited[node] = true;
			while (++i < bfsArr.length)
				graph[bfsArr[i]]?.forEach(el => {
					if (!visited[el]) {
						visited[el] = true;
						bfsArr.push(el);
						chars.push(s[el]);
					}
				});
			chars.sort((a, b) => {
				if (a < b) return -1;
				return 1;
			});
			bfsArr.sort((a, b) => a - b);
			for (let i = 0; i < bfsArr.length; i++) res[bfsArr[i]] = chars[i];
		};

	for (let i = 0; i < n; i++) bfs(i);
	return res.join("");
};

console.log(
	smallestStringWithSwaps("dcab", [
		[0, 3],
		[1, 2],
		[0, 2],
	])
);
