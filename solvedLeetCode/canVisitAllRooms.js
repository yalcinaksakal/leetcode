/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	const visit = room => {
		if (!rooms[room]) return;
		const next = [...rooms[room]];
		rooms[room] = 0;
		next.forEach(r => visit(r));
	};

	visit(0);
	for (const r of rooms) if (r) return false;
	return true;
};
