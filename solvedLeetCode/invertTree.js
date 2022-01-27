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
var invertTree = function (root) {
	if (!root) return root;

	const reverse = r => {
		if (!r) return;
		const tmp = r.right;
		r.right = r.left;
		r.left = tmp;
		reverse(r.left);
		reverse(r.right);
	};
	reverse(root);

	return root;
};
