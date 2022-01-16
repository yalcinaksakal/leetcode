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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	const stack = [];
	let index = 0;

	while (stack.length || root) {
		if (root) {
			stack.push(root);
			root = root.left;
		} else {
			//root
			index++;
			if (index == k) return stack.pop().val;
			root = stack.pop().right;
		}
	}

	return -1;
};
