function ListNode(val) {
	this.val = val;
	this.next = null;
}

const a = new ListNode(2);
let b = a.next?.next;
console.log(b);
