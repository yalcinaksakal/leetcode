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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
	const cur = [],
		res = [];

	const traverse = (r, t) => {
		if (!r) return;
		if (!r.left && !r.right) {
			if (r.val == t) res.push([...cur, r.val]);
			return;
		}
		cur.push(r.val);
		r.left && traverse(r.left, t - r.val);
		r.right && traverse(r.right, t - r.val);
		cur.pop();
	};

	traverse(root, targetSum);

	return res;
};
