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
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
	let l1,
		l2,
		i = 0,
		j = 0;
	const res = [];

	const traverse = r => {
		const stack = [],
			res = [];
		while (r || stack.length)
			if (r) {
				stack.push(r);
				r = r.left;
			} else {
				r = stack.pop();
				res.push(r.val);
				r = r.right;
			}
		return res;
	};

	l1 = traverse(root1);
	l2 = traverse(root2);

	while (true)
		if (i < l1.length && j < l2.length)
			res.push(l1[i] < l2[j] ? l1[i++] : l2[j++]);
		else if (j < l2.length) res.push(l2[j++]);
		else if (i < l1.length) res.push(l1[i++]);
		else break;

	return res;
};

var getAllElements1 = function (root1, root2) {
	const res = [];

	const traverse = r => {
		const stack = [];
		while (r || stack.length)
			if (r) {
				stack.push(r);
				r = r.left;
			} else {
				r = stack.pop();
				res.push(r.val);
				r = r.right;
			}
		return res;
	};

	traverse(root1);
	traverse(root2);

	return res.sort((a, b) => a - b);
};
