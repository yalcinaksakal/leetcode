/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
	let path = "";
	while (head) {
		path += head.val + "-";
		head = head.next;
	}
	const traverse = (r, p) => {
		if (!r) return false;
		p += r.val + "-";
		return p.includes(path)
			? true
			: traverse(r.left, p) || traverse(r.right, p);
	};
	return traverse(root, "");
};
var isSubPath1 = function (head, root, curHead = head) {
	if (!curHead) return true;
	if (!root) return false;
	if (root.val === curHead.val) {
		curHead = curHead.next;
		if (!curHead) return true;
	}
	return (
		isSubPath(head, root.left, curHead) ||
		isSubPath(head, root.right, curHead) ||
		isSubPath(head, root.left) ||
		isSubPath(head, root.right)
	);
};
