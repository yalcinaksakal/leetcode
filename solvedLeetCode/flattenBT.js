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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	const stack = [];
	let cur = root,
		prev;

	while (stack.length || cur)
		if (cur) {
			if (cur.left) {
				cur.right && stack.push(cur.right);
				cur.right = cur.left;
				cur.left = null;
			}
			prev = cur;
			cur = cur.right;
		} else {
			cur = stack.pop();
			prev.right = cur;
		}

	return root;
};
