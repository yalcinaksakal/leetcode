/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
	if (original === target) return cloned;
	let result = false;
	original.right &&
		(result = getTargetCopy(original.right, cloned.right, target));
	!result &&
		original.left &&
		(result = getTargetCopy(original.left, cloned.left, target));
	return result;
};
