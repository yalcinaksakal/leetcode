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
var balanceBST = function (root) {
	const getIOT = r => {
		const stack = [];
		const iot = [];
		while (stack.length || r) {
			if (r) {
				stack.push(r);
				r = r.left;
			} else {
				r = stack.pop();
				iot.push(r.val);
				r = r.right;
			}
		}
		return iot;
	};

	const buildTree = nodes => {
		if (!nodes.length) return null;
		const mid = Math.floor(nodes.length / 2);
		return new TreeNode(
			nodes[mid],
			buildTree(nodes.slice(0, mid)),
			buildTree(nodes.slice(mid + 1))
		);
	};

	return buildTree(getIOT(root));
};
