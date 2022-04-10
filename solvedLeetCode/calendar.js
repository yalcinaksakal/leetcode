function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var MyCalendar = function () {
	this.bookings = new ListNode();
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
	let head = this.bookings.next,
		prev = this.bookings;
	while (head)
		if (head.val[1] <= start) {
			prev = head;
			head = head.next;
		} else {
			if (head.val[0] < end || (prev.val && prev.val[1] > start)) return false;
			prev.next = new ListNode([start, end], head);
			return true;
		}

	if (prev.val && prev.val[1] > start) return false;
	prev.next = new ListNode([start, end]);
	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
const cal = new MyCalendar();
console.log(cal.book(10, 20));
console.log(cal.book(15, 25));
console.log(cal.book(20, 30));
console.log(cal.book(1, 10));
