// Unique Binary Search Trees II
// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:

// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// Example 2:

// Input: n = 1
// Output: [[1]]

/**
 * Definition for a binary tree node.*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generateTrees = function (n) {
  const bfsMap = {
    0: ["0"],
    1: ["1"],
    //LeftHeadRight
    2: [["021"], ["120"]],
  };
  const createArrBFS = k => {
    arrBfs = [];
    for (j = 1; j <= k; j++) {
      left = bfsMap[j - 1];
      right = bfsMap[k - j];
      for (const l of left) for (const r of right) arrBfs.push(l + k + r);
    }
    bfsMap[k] = arrBfs;
  };

  const create = t => {
    //find Max, index of it is root's index
    const indexOfRoot = t
      .split("")
      .reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);

    const head = new TreeNode(++nodeVal);

    const left = t.slice(0, indexOfRoot);
    const right = t.slice(indexOfRoot + 1);
    //place left child
    if (left.length > 1) head.left = create(left);
    else if (+left[0]) head.left = new TreeNode(++nodeVal);

    //place right child
    if (right.length > 1) head.right = create(right);
    else if (+right[0]) head.right = new TreeNode(++nodeVal);
    return head;
  };

  for (i = 3; i <= n; i++) createArrBFS(i);
  //   console.log(bfsMap[n]);
  result = [];
  let nodeVal;
  for (const tree of bfsMap[n]) {
    nodeVal = 0;
    result.push(create(tree));
  }
  //   console.log(result);
  return result;
};
console.log(generateTrees(3));
