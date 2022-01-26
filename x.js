/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.cap = capacity;
	this.data = {};
	this.size = 0;
	this.tail = null;
	this.head = null;
};
LRUCache.prototype.deleteHead = function () {
	const next = this.data[this.head].next;
	delete this.data[this.head];
	this.head = next;
	this.data[next].prev = null;
	this.size--;
};
LRUCache.prototype.push = function (key, value = this.data[key].value) {
	if (key == this.tail) {
		this.data[key].value = value;
		return;
	}
	if (key == this.head) {
		const next = this.data[key].next;
		this.head = next;
		this.data[next].prev = null;
	} else if (this.data[key]) {
		this.data[this.data[key].prev].next = this.data[key].next;
		this.data[this.data[key].next].prev = this.data[key].prev;
	} else this.size++;
	this.data[key] = { value, prev: this.tail, next: null };
	if (this.data[key].prev) this.data[this.data[key].prev].next = key;
	this.tail = key;
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.data[key] == undefined) return -1;
	this.push(key);
	return this.data[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	this.push(key, value);
	if (!this.head) this.head = key;
	if (this.size > this.cap) this.deleteHead();
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const a = new LRUCache(2);
a.put(1, 1);
a.put(2, 1);

a.put(2, 2);
a.get(2);
a.put(1, 1);
a.put(4, 1);
a.get(2);
