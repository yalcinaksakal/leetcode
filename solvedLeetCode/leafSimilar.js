/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let arrLeaves = [];
  const getLeaves = r => {
    if (r.left === null && r.right === null) arrLeaves.push(r.val);
    if (r.left !== null) getLeaves(r.left);
    if (r.right !== null) getLeaves(r.right);
    return [...arrLeaves];
  };

  const leaves1 = getLeaves(root1);
  arrLeaves = [];
  const leaves2 = getLeaves(root2);

  if (leaves1.length !== leaves2.length) return false;

  for (i = 0; i < leaves1.length; i++)
    if (leaves1[i] !== leaves2[i]) return false;

  return true;
};
