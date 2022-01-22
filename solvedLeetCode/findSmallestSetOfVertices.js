/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
	const d = new Set();
	for (let i = 0; i < n; i++) d.add(i);
	for (const [_, t] of edges) d.delete(t);
	return Array.from(d);
};
