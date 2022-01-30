/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	let slow = head,
		fast = head.next;
	if (!fast) return true;

	while (fast) {
		fast = fast.next?.next;
		slow = slow.next;
	}

	let prev = null,
		next;
	while (slow) {
		next = slow.next;
		slow.next = prev;
		prev = slow;
		slow = next;
	}
	//head of first half=head, head of second half=prev
	while (head && prev) {
		if (head.val != prev.val) return false;
		head = head.next;
		prev = prev.next;
	}
	return true;
};
