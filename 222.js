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
var countNodes = function (root) {
	const getDepth = node => (node ? 1 + getDepth(node.left) : 0),
		count = node => {
			if (!node) return 0;
			const leftDepth = getDepth(node.left),
				rightDepth = getDepth(node.right);
			return leftDepth === rightDepth
				? 2 ** leftDepth + count(node.right)
				: 2 ** rightDepth + count(node.left);
		};
	return count(root);
};
