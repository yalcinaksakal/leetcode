/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
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

var kthSmallest = function (mat, k) {
	const n = mat.length,
		m = mat[0].length,
		pq = new PriorityQueue((a, b) => a.sum < b.sum),
		visited = {};
	let cur, key;
	pq.add({
		indices: Array(n).fill(0),
		sum: mat.reduce((acc, cur) => acc + cur[0], 0),
	});

	while (--k) {
		cur = pq.poll();
		for (let i = 0; i < n; i++) {
			const newSum = { indices: [...cur.indices], sum: cur.sum };
			if (++newSum.indices[i] === m) continue;
			key = newSum.indices.join(",");
			if (visited[key]) continue;
			visited[key] = true;
			newSum.sum += mat[i][newSum.indices[i]] - mat[i][newSum.indices[i] - 1];
			pq.add(newSum);
		}
	}
	return pq.poll().sum;
};
console.log(
	kthSmallest(
		[
			[1, 3, 11],
			[2, 4, 6],
		],
		9
	)
);
