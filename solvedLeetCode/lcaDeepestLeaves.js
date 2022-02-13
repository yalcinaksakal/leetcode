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
var lcaDeepestLeaves = function (root) {
	const traverse = (r = root) => {
		if (!r) return [0, null];
		const left = traverse(r.left);
		const right = traverse(r.right);
		return left[0] == right[0]
			? [left[0] + 1, r]
			: left[0] > right[0]
			? [left[0] + 1, left[1]]
			: [right[0] + 1, right[1]];
	};
	return traverse().node;
};
