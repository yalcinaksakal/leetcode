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
var FindElements = function (root) {
	const contaminate = (r = root, val = 0) => {
		if (!r) return;
		r.val = val;
		contaminate(r.left, 2 * val + 1);
		contaminate(r.right, 2 * val + 2);
	};
	contaminate();

	this.root = root;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
	const search = (r = this.root) =>
		r ? (r.val == target ? true : search(r.left) || search(r.right)) : false;

	return search();
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
