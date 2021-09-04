// Given the root of a binary tree, return the sum of all left leaves.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0

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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let lefts = 0;
  const nodes = [];
  nodes.push(root);
  i = 0;
  while (nodes[i]) {
    if (nodes[i].left) {
      nodes.push(nodes[i].left);
      check = !nodes[i].left.left && !nodes[i].left.right;
      if (check) lefts += nodes[i].left.val;
    }
    if (nodes[i].right) nodes.push(nodes[i].right);
    i++;
  }
  return lefts;
};
