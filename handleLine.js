/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
	const text = [];
	let line = [],
		lineLength = 0;
	const handleLine = () => {
		const blanks = maxWidth - lineLength,
			blankBetween =
				line.length == 1 ? blanks : Math.floor(blanks / (line.length - 1));
		let remaining = line.length == 1 ? 0 : blanks % (line.length - 1);
		let newLine = "";
		for (const w of line)
			newLine += w + " ".repeat(blankBetween + (remaining-- > 0 ? 1 : 0));
		if (line.length > 1) newLine = newLine.trimEnd();
		text.push(newLine);
	};
	for (const word of words)
		if (lineLength + line.length + word.length > maxWidth) {
			handleLine();
			line = [word];
			lineLength = word.length;
		} else {
			line.push(word);
			lineLength += word.length;
		}
	if (line.length) {
		line = line.join(" ");
		line += " ".repeat(maxWidth - line.length);
		line.length && text.push(line);
	}
	return text;
};
console.log(
	fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);
