/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
	this.queue = Array(k).fill(0);
	this.capacity = k;
	this.front = 0;
	this.length = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
	if (this.length === this.capacity) return false;
	this.queue[(this.front + this.length) % this.capacity] = value;
	this.length++;
	return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
	if (!this.length) return false;
	this.front++;
	this.front %= this.capacity;
	this.length--;
	return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
	return this.length ? this.queue[this.front] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
	return this.length
		? this.queue[(this.front + this.length - 1) % this.capacity]
		: -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
	return this.length < 1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
	return this.length === this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
const myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear(); // return 3
myCircularQueue.isFull(); // return True
myCircularQueue.deQueue(); // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear(); // return 4
