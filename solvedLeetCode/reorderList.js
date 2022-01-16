/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function (head) {
	let first = head,
		second = head.next;

	while (second) {
		second = second.next?.next;
		if (second) first = first.next;
	}

	//second half's head
	second = first.next;
	if (!second) return head;

	// console.log(second);
	first.next = null;
	let prev = null,
		tmp;

	//reverse second half
	while (second) {
		tmp = second.next;
		second.next = prev;
		prev = second;
		second = tmp;
	}
	//prev is the head of reversed list
	// console.log(prev,head);

	// f1>s1>f2>s2....
	first = head;
	second = prev;
	let tmp2;
	while (first) {
		tmp = first?.next;
		tmp2 = second?.next;
		first.next = second;
		if (tmp && second) second.next = tmp;
		first = tmp;
		second = tmp2;
	}

	return head;
};
