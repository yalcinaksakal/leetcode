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
var sumEvenGrandparent = (r, f = 1, g = 1) =>
	r
		? sumEvenGrandparent(r.left, r.val, f) +
		  sumEvenGrandparent(r.right, r.val, f) +
		  (g % 2 == 0 ? r.val : 0)
		: 0;
