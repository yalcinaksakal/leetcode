/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
	let connected = 0;
	const numSet = new Set(nums);
	while (head) {
		while (head && !numSet.has(head.val)) head = head.next;
		if (head) connected++;
		while (head && numSet.has(head.val)) head = head.next;
	}
	return connected;
};
