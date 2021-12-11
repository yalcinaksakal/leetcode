//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const handleBST = (low, high) => {
    if (low > high) return undefined;
    let mid = (low + high) >>> 1;
    return new TreeNode(
      nums[mid],
      handleBST(low, mid - 1),
      handleBST(mid + 1, high)
    );
  };

  return handleBST(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
