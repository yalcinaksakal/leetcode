/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	let count = rooms.length;
	const visited = {},
		visit = r => {
			if (visited[r]) return;
			visited[r] = true;
			count--;
			rooms[r].forEach(room => visit(room));
		};

	visit(0);

	return !count;
};
