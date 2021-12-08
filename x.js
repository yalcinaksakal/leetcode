/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const map = {},
    letters = tiles.split(""),
    permute = [];

  let count = 0;

  const dfs = () => {
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === null) continue;
      permute.push(letters[i]);
      letters[i] = null;
      if (!map[permute.join("")]) {
        map[permute.join("")] = 1;
        count++;
      }
      dfs();
      letters[i] = permute.pop();
    }
  };
  dfs();
  return count;
};

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities2 = function (tiles) {
  const map = {},
    letters = tiles.split(""),
    permute = [];

  let count = 0;

  const dfs = () => {
    const letter = letters.pop();
    if (letter === undefined) return;
    permute.push(letter);
    if (!map[permute.join("")]) {
      map[permute.join("")] = 1;
      count++;
    }
    dfs();
    letters.push(permute.pop());
  };

  dfs();

  return count;
};

console.log(numTilePossibilities2("AAB"));
