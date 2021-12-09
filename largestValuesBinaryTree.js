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

var largestValues = function (root) {
  if (!root) return [];

  const result = [];
  let tempNodeList = [];

  let max;

  result.push(root.val);

  const getLeaves = nodeList => {
    tempNodeList = [];
    max = null;
    for (const node of nodeList)
      [node.left, node.right].forEach(n => {
        if (n) {
          if (n.val > max || max === null) max = n.val;
          tempNodeList.push(n);
        }
      });

    if (max !== null) {
      result.push(max);
      getLeaves([...tempNodeList]);
    }
  };

  getLeaves([root]);
  return result;
};
