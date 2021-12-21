//   Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
	if (!head) return head;

	let prev = null,
		next;

	while (head) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
};

var reverseList1 = function (head) {
	if (!head || !head.next) return head;

	let reverse = null,
		next;

	const reverser = () => {
		next = head.next;
		head.next = reverse;
		reverse = head;
		head = next;
		if (head) reverser();
	};

	reverser();

	return reverse;
};

const list = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(reverseList(list));
