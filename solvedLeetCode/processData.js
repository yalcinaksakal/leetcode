function processData(input) {
	//Enter your code here
	input = input.split(/\r?\n/);
	input.shift();

	const undo = [];
	let cur = "",
		prev;
	for (let line of input) {
		line = line.split(" ");
		switch (+line[0]) {
			case 1:
				undo.push(cur);
				cur += line[1];
				break;
			case 2:
				undo.push(cur);
				cur = cur.slice(0, -line[1]);
				break;
			case 3:
				console.log(cur[+line[1] - 1]);
				break;
			case 4:
				prev = undo.pop();
				cur = prev ? prev : "";
				break;
			default:
				break;
		}
	}
}
processData(["1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"]);
