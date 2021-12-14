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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	const stack = [];
	let res = 0;

	while (root || stack.length) {
		if (root) {
			stack.push(root);
			if (root.val >= low && root.val <= high) res += root.val;
			root = root.left;
		} else root = stack.pop().right;
	}
	return res;
};
