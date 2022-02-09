/**
 * @param {string} command
 * @return {string}
 */
var interpret1 = command =>
	command.split("()").join("o").split("(al)").join("al");
var interpret = command =>
	command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
