var MyQueue = function () {
	this.val = undefined;
	this.next = null;
	this.size = 0;
	this.end = null;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.size++;
	if (this.size === 1) {
		this.val = x;
		this.end = this;
		return;
	}
	newNode = new MyQueue();
	newNode.push(x);
	this.end.next = newNode;
	this.next = this.next ? this.next : newNode;
	this.end = newNode;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	val = this.val;
	nextNode = this.next;
	this.val = nextNode ? nextNode.val : undefined;
	this.next = nextNode ? nextNode.next : null;
	this.size--;
	return val;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.val;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.size ? false : true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
