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
 */
var BSTIterator = function (root) {
	this.list = [];
	this.index = 0;
	const inOrder = r => {
		if (!r) return;
		inOrder(r.left);
		this.list.push(r.val);

		inOrder(r.right);
	};
	inOrder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
	return this.list[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
	return this.index < this.list.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
