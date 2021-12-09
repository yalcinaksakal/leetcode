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

  const pushNegative = val =>
    tempNodeList[tempNodeList.length - 1] < 0
      ? (tempNodeList[tempNodeList.length - 1] += val)
      : tempNodeList.push(val);

  const counter = nodeList => {
    tempNodeList = [];
    for (const node of nodeList)
      node < 0
        ? pushNegative(2 * node)
        : [node.left, node.right].forEach(n =>
            n ? tempNodeList.push(n) : pushNegative(-1)
          );

    while (tempNodeList[0] < 0) tempNodeList.shift();
    while (tempNodeList[tempNodeList.length - 1] < 0) tempNodeList.pop();

    length = tempNodeList.reduce(
      (acc, cur) => (acc += cur < 0 ? Math.abs(cur) : 1),
      0
    );

    if (length > result) result = length;

    if (tempNodeList.length) counter([...tempNodeList]);
  };

  counter([root]);

  return result;
};
