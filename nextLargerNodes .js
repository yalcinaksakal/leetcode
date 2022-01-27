/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
	let j = 0,
		l;
	const next = {},
		cur = [],
		res = [];

	while (head) {
		l = cur.length;
		for (let i = 0; i < l; i++)
			if (cur[i].val < head.val) {
				next[cur[i].i] = head.val;
				cur.splice(i--, 1);
				l--;
			}
		cur.push({ val: head.val, i: j++ });
		head = head.next;
	}

	for (let i = 0; i < j; i++) res.push(next[i] ? next[i] : 0);

	return res;
};
