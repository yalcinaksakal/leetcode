//  Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	const root = preorder.shift(),
		inI = inorder.findIndex(e => e == root),
		preI = inI == -1 ? 0 : preorder.findIndex(e => e == preorder[inI - 1]);

	return new TreeNode(
		root,
		inI
			? buildTree(preorder.slice(0, preI + 1), inorder.slice(0, inI))
			: undefined,
		inI + 1 < inorder.length
			? buildTree(preorder.slice(preI + 1), inorder.slice(inI + 1))
			: undefined
	);
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
