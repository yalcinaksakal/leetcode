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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
	const traverse = r => {
		if (!r) return 0;
		const left = traverse(r.left),
			right = traverse(r.right);

		if (!left) r.left = null;
		if (!right) r.right = null;

		return left + right + r.val;
	};

	return traverse(root) ? root : null;
};
