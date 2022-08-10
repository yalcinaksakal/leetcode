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
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) return [];
	const rightView = [],
		nodes = [root, null];
	let i = -1;
	while (++i < nodes.length)
		if (nodes[i]) {
			nodes[i].left && nodes.push(nodes[i].left);
			nodes[i].right && nodes.push(nodes[i].right);
		} else {
			rightView.push(nodes[i - 1].val);
			i + 1 < nodes.length && nodes.push(null);
		}
	return rightView;
};
