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
 * @return {boolean}
 */
var isBalanced = function (root) {
	let check = true;
	const compare = node => {
		if (!node || !check) return 0;
		const leftHeight = compare(node.left),
			rightHeight = compare(node.right);
		if (Math.abs(leftHeight - rightHeight) > 1) check = false;
		return 1 + Math.max(leftHeight, rightHeight);
	};
	compare(root);
	return check;
};
