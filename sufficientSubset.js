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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
	let sum = 0;

	const handle = node => {
		if (!node) return sum < limit;
		sum += node.val;
		if (!node.left && !node.right) return sum < limit;
		let left,
			right,
			res = true;
		if (node.left) {
			left = handle(node.left);
			if (left) node.left = null;
			res = res && left;
		}
		if (node.right) {
			right = handle(node.right);
			if (right) node.right = null;
			res = res && right;
		}
		sum -= node.val;
		return res;
	};

	return handle(root) ? null : root;
};
