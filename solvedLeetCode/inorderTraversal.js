// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// s —> empty stack
// while (not s.isEmpty() or node != null)
//   if (node != null)
//     s.push(node)
//     node —> node.left
//   else
//     node —> s.pop()
//     visit(node)
//     node —> node.right

var inorderTraversal = function (root) {
  const stack = [];
  const result = [];
  while (stack.length && root) {
    if (root) {
      console.log(root);
      stack.push(root);
      root = root.left;
    } else {
      //root
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};

const root = new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root));
