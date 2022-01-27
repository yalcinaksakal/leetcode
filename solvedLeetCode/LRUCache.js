var LRUCache = function (capacity) {
	this.cap = capacity;
	this.data = {
		head: { next: "tail", prev: "tail" },
		tail: { prev: "head", next: "head" },
	};
	this.size = 0;
};
LRUCache.prototype.get = function (key) {
	if (!this.data[key]) return -1;
	this.put(key);
	return this.data[key].val;
};

LRUCache.prototype.put = function (key, value = this.data[key].val) {
	if (this.data[key]) {
		this.data[this.data[key].prev].next = this.data[key].next;
		this.data[this.data[key].next].prev = this.data[key].prev;
	} else this.size++;
	this.data[key] = {
		val: value,
		prev: "head",
		next: this.data.head.next,
	};
	this.data[this.data.head.next].prev = key;
	this.data.head.next = key;
	if (this.size > this.cap) {
		const prev = this.data.tail.prev;
		this.data.tail.prev = this.data[prev].prev;
		this.data[this.data[prev].prev].next = "tail";
		this.size--;
		delete this.data[prev];
	}
};
const a = new LRUCache(2);
console.log(a);
a.put(1, 1);
a.put(2, 2);
a.get(1);
a.put(3, 3);
a.get(2);
a.put(4, 4);
a.get(1);
a.get(3);
a.get(4);
