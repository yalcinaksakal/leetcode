function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
	if (!nums.length) return null;
	let max = -1,
		mi = 0;
	for (let i = 0; i < nums.length; i++)
		if (nums[i] > max) {
			max = nums[i];
			mi = i;
		}
	return new TreeNode(
		max,
		constructMaximumBinaryTree(nums.slice(0, mi)),
		constructMaximumBinaryTree(nums.slice(mi + 1))
	);
};
constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
