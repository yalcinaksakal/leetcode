function processData(input) {
	//Enter your code here
	// input = input.split(/\r?\n/);
	// const n = input.shift().split(" ")[0];
	const communities = {},
		belongsTo = {};
	let gNo = 1,
		p1,
		p2,
		small,
		big;
	for (let line of input) {
		line = line.split(" ");
		p1 = line[1];
		if (line[0] == "Q") {
			console.log(
				communities[belongsTo[p1]] ? communities[belongsTo[p1]].size : 1
			);
			continue;
		}
		p2 = line[2];
		if (!belongsTo[p1] && !belongsTo[p2]) {
			belongsTo[p1] = belongsTo[p2] = gNo;
			communities[gNo++] = new Set([p1, p2]);
		} else if (belongsTo[p1] && belongsTo[p2]) {
			if (belongsTo[p1] === belongsTo[p2]) continue;
			if (communities[belongsTo[p1]].size > communities[belongsTo[p2]].size) {
				small = belongsTo[p2];
				big = belongsTo[p1];
			} else {
				small = belongsTo[p1];
				big = belongsTo[p2];
			}
			communities[small].forEach(p => {
				communities[big].add(p);
				belongsTo[p] = big;
			});
			delete communities[small];
		} else {
			communities[belongsTo[p1] ? belongsTo[p1] : belongsTo[p2]].add(
				belongsTo[p1] ? p2 : p1
			);
			belongsTo[belongsTo[p1] ? p2 : p1] = belongsTo[p1]
				? belongsTo[p1]
				: belongsTo[p2];
		}
	}
}
