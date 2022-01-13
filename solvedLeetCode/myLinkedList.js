var MyLinkedList = function () {
	this.length = 0;
	this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index, node = false) {
	if (index < 0 || index >= this.length || !this.length) return -1;

	let i = 0,
		cur = this.head;
	while (i != index) {
		cur = cur.next;
		i++;
	}
	return node ? cur : cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	this.head = { val, next: this.head };
	this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	if (!this.length) {
		this.addAtHead(val);
		return;
	}
	this.get(this.length - 1, true).next = { val, next: null };
	this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index > this.length || index < 0) return;

	if (!index) {
		this.addAtHead(val);
		return;
	}

	const prevNode = this.get(index - 1, true);
	prevNode.next = { val, next: prevNode.next };
	this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index >= this.length || !this.length || index < 0) return;

	this.length--;

	if (!index) {
		this.head = this.head.next;
		return;
	}

	const prevNode = this.get(index - 1, true);
	prevNode.next = prevNode.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
