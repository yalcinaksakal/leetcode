/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
function PriorityQueue(comparator) {
	if (!(this instanceof PriorityQueue)) return new PriorityQueue(comparator);
	this.array = [];
	this.size = 0;
	this.compare = comparator || ((a, b) => a > b);
}

PriorityQueue.prototype.add = function (myval) {
	var i = this.size;
	this.array[this.size] = myval;
	this.size += 1;
	var p;
	var ap;
	while (i > 0) {
		p = (i - 1) >> 1;
		ap = this.array[p];
		if (!this.compare(myval, ap)) {
			break;
		}
		this.array[i] = ap;
		i = p;
	}
	this.array[i] = myval;
};

// for internal use
PriorityQueue.prototype._percolateUp = function (i, force) {
	var myval = this.array[i];
	var p;
	var ap;
	while (i > 0) {
		p = (i - 1) >> 1;
		ap = this.array[p];
		// force will skip the compare
		if (!force && !this.compare(myval, ap)) {
			break;
		}
		this.array[i] = ap;
		i = p;
	}
	this.array[i] = myval;
};

// for internal use
PriorityQueue.prototype._percolateDown = function (i) {
	var size = this.size;
	var hsize = this.size >>> 1;
	var ai = this.array[i];
	var l;
	var r;
	var bestc;
	while (i < hsize) {
		l = (i << 1) + 1;
		r = l + 1;
		bestc = this.array[l];
		if (r < size) {
			if (this.compare(this.array[r], bestc)) {
				l = r;
				bestc = this.array[r];
			}
		}
		if (!this.compare(bestc, ai)) {
			break;
		}
		this.array[i] = bestc;
		i = l;
	}
	this.array[i] = ai;
};

PriorityQueue.prototype.peek = function () {
	return this.size ? this.array[0] : [0, 0];
};

PriorityQueue.prototype.poll = function () {
	if (this.size == 0) return undefined;
	var ans = this.array[0];
	if (this.size > 1) {
		this.array[0] = this.array.pop();
		this.size--;
		this._percolateDown(0);
	} else this.size -= 1;

	return ans;
};

var maximumBeauty = function (items, queries) {
	queries = queries.map((val, i) => [val, i]);
	queries.sort((a, b) => a[0] - b[0]);
	items.sort((a, b) => a[0] - b[0]);
	const res = Array(queries.length).fill(0),
		pq = new PriorityQueue((a, b) => a[1] > b[1]);
	let q = 0;
	for (const item of items) {
		while (q < queries.length && queries[q][0] < item[0])
			res[queries[q++][1]] = pq.peek()[1];
		pq.add(item);
	}
	while (q < queries.length) res[queries[q++][1]] = pq.peek()[1];
	return res;
};

console.log(
	maximumBeauty(
		[
			[193, 732],
			[781, 962],
			[864, 954],
			[749, 627],
			[136, 746],
			[478, 548],
			[640, 908],
			[210, 799],
			[567, 715],
			[914, 388],
			[487, 853],
			[533, 554],
			[247, 919],
			[958, 150],
			[193, 523],
			[176, 656],
			[395, 469],
			[763, 821],
			[542, 946],
			[701, 676],
		],
		[
			885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153,
			151, 1479, 1180, 875, 276, 1584,
		]
	)
);
console.log(
	maximumBeauty(
		[
			[1, 2],
			[3, 2],
			[2, 4],
			[5, 6],
			[3, 5],
		],
		[1, 2, 3, 4, 5, 6]
	)
);
console.log(
	maximumBeauty(
		[
			[1, 2],
			[3, 2],
			[2, 4],
			[5, 6],
			[3, 5],
		],
		[1, 6, 3, 4, 5, 6]
	)
);
console.log(maximumBeauty([[10, 1000]], [5]));
console.log(
	maximumBeauty(
		[
			[1, 2],
			[3, 2],
			[2, 4],
			[5, 6],
			[3, 5],
		],
		[1, 2, 3, 4, 5, 6]
	)
);
