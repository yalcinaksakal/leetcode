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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const res = [];
	if (!root) return res;

	let parents,
		parent,
		children = [root];

	while (children.length) {
		parents = [...children];
		res.push(parents.map(p => p.val));
		children = [];
		while (parents.length) {
			parent = parents.shift();
			if (parent.left) children.push(parent.left);
			if (parent.right) children.push(parent.right);
		}
	}

	return res;
};
