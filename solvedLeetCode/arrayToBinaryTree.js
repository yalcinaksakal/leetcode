var sortedArrayToBST = function (nums) {
  return traverse(nums, 0, nums.length - 1); // recursively parse through array
};

function traverse(nums, start, end) {
  if (start > end) {
    // if start>end means left tree or right subtree is not possible so return null
    return null;
  }
  let mid = Math.floor((start + end) / 2); // get the mid index
  let root = new TreeNode(nums[mid]); // make a new node
  root.left = traverse(nums, start, mid - 1); // now recursively generate left subtree
  root.right = traverse(nums, mid + 1, end); // similarly generate right subtree
  return root; // return the root
}
