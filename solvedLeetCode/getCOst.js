function getCost(gNodes, gFrom, gTo, gWeight) {
	// Print your answer within the function and return nothing

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

	PriorityQueue.prototype._percolateUp = function (i, force) {
		var myval = this.array[i];
		var p;
		var ap;
		while (i > 0) {
			p = (i - 1) >> 1;
			ap = this.array[p];
			if (!force && !this.compare(myval, ap)) {
				break;
			}
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

	PriorityQueue.prototype._removeAt = function (index) {
		if (index > this.size - 1 || index < 0) return undefined;

		this._percolateUp(index, true);
		return this.poll();
	};
	PriorityQueue.prototype.remove = function (myval, nCost) {
		for (var i = 0; i < this.size; i++) {
			if (this.array[i][0] === myval) {
				this._removeAt(i);
				return true;
			}
		}
		return false;
	};
	const paths = {},
		dijkstra = {},
		visited = {},
		unvisited = new PriorityQueue((a, b) => a[1] < b[1]);
	unvisited.add([1, 0]);
	dijkstra[1] = 0;
	let newCost;
	for (let i = 0; i < gTo.length; i++) {
		paths[gFrom[i]]
			? paths[gFrom[i]].push([gTo[i], gWeight[i]])
			: (paths[gFrom[i]] = [[gTo[i], gWeight[i]]]);
		paths[gTo[i]]
			? paths[gTo[i]].push([gFrom[i], gWeight[i]])
			: (paths[gTo[i]] = [[gFrom[i], gWeight[i]]]);
	}

	while (unvisited.size) {
		const [city, cost] = unvisited.poll();
		visited[city] = true;
		if (!paths[city]) continue;
		paths[city].forEach(node => {
			newCost = Math.max(cost, node[1]);
			if (visited[node[0]]) {
				if (newCost < dijkstra[node[0]]) dijkstra[node[0]] = newCost;
			} else {
				if (dijkstra[node[0]] === undefined) {
					dijkstra[node[0]] = newCost;
					unvisited.add([node[0], newCost]);
				} else if (dijkstra[node[0]] > newCost) {
					unvisited.remove(node[0]);
					unvisited.add([node[0], newCost]);
				}
			}
		});
	}

	console.log(
		dijkstra[gNodes] === undefined ? "NO PATH EXISTS" : dijkstra[gNodes]
	);
}

getCost(
	5,
	[1, 3, 1, 4, 2],
	[1, 2, 3, 4, 1, 3],
	[2, 3, 4, 5, 3, 5],
	[30, 50, 70, 90, 70, 85]
);
