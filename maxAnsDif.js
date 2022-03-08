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
	let v = 0;
	const traverse = (r, max, min) => {
		if (!r) return;
		if (r.val > max) max = r.val;
		else if (r.val < min) min = r.val;
		v = Math.max(v, max - min);
		traverse(r.left, max, min);
		traverse(r.right, max, min);
	};

	traverse(root, root.val, root.val);
	return v;
};
