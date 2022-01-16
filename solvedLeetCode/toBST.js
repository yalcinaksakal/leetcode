/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	const create = (low, high) => {
		if (low > high) return undefined;
		let mid = (low + high) >>> 1;
		return new TreeNode(nums[mid], create(low, mid - 1), create(mid + 1, high));
	};

	return create(0, nums.length - 1);
};
