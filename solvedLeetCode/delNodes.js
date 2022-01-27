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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
	const forest = new Set();
	forest.add(root);

	const del = r => {
		if (!r) return false;
		let deleted = false;
		if (to_delete.includes(r.val)) {
			forest.delete(r);
			r.left && forest.add(r.left);
			r.right && forest.add(r.right);
			deleted = true;
		}
		if (del(r.left)) r.left = null;
		if (del(r.right)) r.right = null;

		return deleted;
	};

	del(root);

	return Array.from(forest);
};
