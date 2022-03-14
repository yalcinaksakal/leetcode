/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
	const minVer = {},
		res = [];
	for (const [_, t] of edges) minVer[t] = true;
	for (let i = 0; i < n; i++) !minVer[i] && res.push(i);
	return res;
};
