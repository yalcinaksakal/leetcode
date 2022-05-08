/**
 * @param {number[][]} heights
 * @return {number}
 */

var minimumEffortPath = function (heights) {
	const m = heights.length,
		n = heights[0].length,
		dijkstra = { [0 + "," + 0]: 0 },
		dir = { 1: [0, 1], 2: [0, -1], 3: [1, 0], 4: [-1, 0] },
		visited = [],
		unvisited = new PriorityQueue(
			(a, b) => dijkstra[b[0] + "," + b[1]] > dijkstra[a[0] + "," + a[1]]
		),
		isvalid = (i, j) => i > -1 && j > -1 && i < m && j < n;
	// Priotiy Queue
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
			if (!this.compare(myval, ap)) break;
			this.array[i] = ap;
			i = p;
		}
		this.array[i] = myval;
	};

	PriorityQueue.prototype._percolateUp = function (i, force) {
		var myval = this.array[i];
		var p;
		var ap;
		while (i > 0) {
			p = (i - 1) >> 1;
			ap = this.array[p];
			if (!force && !this.compare(myval, ap)) break;
			this.array[i] = ap;
			i = p;
		}
		this.array[i] = myval;
	};
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
	//----------------------------
	let ni, nj, effort, key, nKey;

	unvisited.add([0, 0]);
	while (unvisited.size) {
		const [i, j] = unvisited.poll();
		key = i + "," + j;
		visited[key] = true;
		for (let d = 1; d < 5; d++) {
			ni = i + dir[d][0];
			nj = j + dir[d][1];
			if (!isvalid(ni, nj)) continue;
			effort = Math.max(
				dijkstra[key],
				Math.abs(heights[i][j] - heights[ni][nj])
			);
			nKey = ni + "," + nj;
			if (dijkstra[nKey] === undefined || dijkstra[nKey] > effort)
				dijkstra[nKey] = effort;
			if (!visited[nKey]) unvisited.add([ni, nj]);
		}
	}
	return dijkstra[m - 1 + "," + (n - 1)];
};
console.log(
	minimumEffortPath([
		[1, 2, 2],
		[3, 8, 2],
		[5, 3, 5],
	])
);
