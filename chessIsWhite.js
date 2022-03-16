/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = coord =>
	coord.charCodeAt(0) % 2 === (+coord[1] % 2 ? 0 : 1);
