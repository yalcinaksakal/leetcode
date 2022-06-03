/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
	const minVer = new Set(Array.from(Array(n).keys()));
	for (const [_, _to] of edges) minVer.delete(_to);
	return Array.from(minVer);
};
