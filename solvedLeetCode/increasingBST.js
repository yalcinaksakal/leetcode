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
var increasingBST = function (root) {
	const stack = [];
	let res, prev;

	while (root || stack.length) {
		if (root) {
			stack.push(root);
			root = root.left;
		} else {
			root = stack.pop();
			if (!prev) {
				res = new TreeNode(root.val);
				prev = res;
			} else {
				prev.right = new TreeNode(root.val);
				prev = prev.right;
			}
			root = root.right;
		}
	}
	return res;
};
