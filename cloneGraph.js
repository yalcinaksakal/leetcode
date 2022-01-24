/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
	const copies = {},
		originals = {};
	if (!node) return null;
	const clone = n => {
		if (copies[n.val]) return;
		copies[n.val] = new Node(n.val);
		originals[n.val] = n;
		for (const ch of n.neighbors) clone(ch);
	};
	clone(node);

	for (const key of Object.keys(copies))
		copies[key].neighbors = originals[key].neighbors.map(n => copies[n.val]);

	return copies[node.val];
};
