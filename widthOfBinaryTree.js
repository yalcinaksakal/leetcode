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
var widthOfBinaryTree = function (root) {
  let result = 1,
    tempNodeList = [],
    length;

  const counter = nodeList => {
    tempNodeList = [];
    for (const node of nodeList) {
      if (node === " ") tempNodeList.push(" ", " ");
      else {
        tempNodeList.push(node.left ? node.left : " ");
        tempNodeList.push(node.right ? node.right : " ");
      }
    }
    length = tempNodeList
      .map(n => (n === " " ? " " : 1))
      .join("")
      .trim().length;
    if (length > result) result = length;
    while (tempNodeList[0] === " ") tempNodeList.shift();
    while (tempNodeList[tempNodeList.length - 1] === " ") tempNodeList.pop();
    if (tempNodeList.length) counter(tempNodeList);
  };

  counter([root]);
  return result;
};
