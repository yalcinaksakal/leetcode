/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
	const output = [];
	let bCom,
		lCom,
		isBlock = false,
		blockEnd,
		line = "",
		i = 0;

	const commentLine = () => {
		lCom[0] && output.push(lCom[0]);
		line = "";
	};

	const commentBlock = () => {
		output.push(bCom[0]);
		bCom.shift();
		line = bCom.join("/*");
		isBlock = true;
	};

	while (i < source.length || line) {
		if (!line) line = source[i++];
		if (isBlock) {
			blockEnd = line.split("*/");
			if (blockEnd.length > 1) {
				blockEnd.shift();
				line = output.pop() + blockEnd.join("*/");
				isBlock = false;
			} else line = "";
			continue;
		}

		lCom = line.split("//");
		bCom = line.split("/*");

		if (lCom.length == 1 && bCom.length == 1) {
			output.push(line);
			line = "";
		} else if (lCom.length > 1 && bCom.length == 1) commentLine();
		else if (lCom.length == 1 && bCom.length > 1) commentBlock();
		else bCom[0].length < lCom[0].length ? commentBlock() : commentLine();
	}
	return output;
};

removeComments([
	"/*Test program */",
	"int main()",
	"{ ",
	"  // variable declaration ",
	"int a, b, c;",
	"/* This is a test",
	"   multiline  ",
	"   comment for ",
	"   testing */",
	"a = b + c;",
	"}",
]);
