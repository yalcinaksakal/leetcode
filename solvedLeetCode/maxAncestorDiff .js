/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
	let max = 0;

	const traverse = (r, parents) => {
		if (!r) return;
		parents.forEach(p => (max = Math.max(max, Math.abs(p - r.val))));
		parents.push(r.val);
		traverse(r.left, parents);
		traverse(r.right, parents);
		parents.pop();
	};
	traverse(root, []);
	return max;
};
