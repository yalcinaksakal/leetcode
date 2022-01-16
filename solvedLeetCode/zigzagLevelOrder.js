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
var zigzagLevelOrder = function (root) {
	let parents = [],
		order = -1;
	const res = [];
	if (root) {
		res.push([root.val]);
		parents.push(root);
	}
	while (parents.length) {
		const children = [];
		parents.forEach(p => {
			p.left && children.push(p.left);
			p.right && children.push(p.right);
		});
		parents = [...children];
		order == -1 && children.reverse();
		if (children.length) res.push(children.map(c => c.val));
		order *= -1;
	}
	return res;
};
