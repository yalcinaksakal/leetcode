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
var convertBST = function (root) {
	const stack = [];
	let sum = 0,
		r = root;
	while (stack.length || r) {
		if (r) {
			stack.push(r);
			r = r.right;
		} else {
			r = stack.pop();
			sum += r.val;
			r.val = sum;
			r = r.left;
		}
	}
	return root;
};
