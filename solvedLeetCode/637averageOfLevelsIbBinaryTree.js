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

//BFS
var averageOfLevels = function (root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    let sum = 0;
    queue.push(null);
    root = queue.shift();
    while (root) {
      sum += root.val;
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
      root = queue.shift();
    }
    result.push(sum / length);
  }
  return result;
};

//DFS ----for anot
const averageOfChildren = function (root) {
  const result = [];
  const nextLevel = node => {
    let sum = 0;
    el = 0;
    const children = [];
    children.push(node.left);
    children.push(node.right);
    for (let child of children)
      if (child) {
        sum += child.val;
        el++;
      }
    if (el) {
      result.push(sum / el);
      for (let child of children) if (child) nextLevel(child);
    }
  };

  if (root !== null) {
    result.push(root.val);
    nextLevel(root);
  }
  return result;
};
averageOfLevels1(3);
/*

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/
