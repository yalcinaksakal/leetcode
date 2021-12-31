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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
	const newNode = new TreeNode(val);

	if (!root) return newNode;

	const insert = r => {
		const child = val < r.val ? r.left : r.right;
		if (child) insert(child);
		else val < r.val ? (r.left = newNode) : (r.right = newNode);
	};

	insert(root);
	return root;
};
