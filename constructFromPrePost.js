//   Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder, root) {
	const child1 = preorder.shift(),
		child2 = postorder.pop();
	if (child1 == undefined) return;
	if (child1 == child2) {
		if (!root) {
			root = new TreeNode(child1);
			constructFromPrePost(preorder, postorder, root);
			return root;
		}
		root.left = new TreeNode(child1);
		constructFromPrePost(preorder, postorder, root.left);
		return;
	}

	root.left = new TreeNode(child1);
	root.right = new TreeNode(child2);

	if (preorder.length < 2) return;

	const left = preorder.findIndex(n => n == child2),
		right = postorder.findIndex(n => n == child1);

	constructFromPrePost(
		preorder.slice(0, left),
		postorder.slice(0, right),
		root.left
	);
	constructFromPrePost(
		preorder.slice(left + 1),
		postorder.slice(right + 1),
		root.right
	);
};
