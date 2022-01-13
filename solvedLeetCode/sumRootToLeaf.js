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
var sumRootToLeaf = function (root) {
	const digits = [];
	let sum = 0;

	const traverse = node => {
		if (!node) return;
		digits.push(node.val);
		if (!node.right && !node.left) sum += parseInt(digits.join(""), 2);
		else {
			traverse(node.right);
			traverse(node.left);
		}
		digits.pop();
	};
	traverse(root);

	return sum;
};
