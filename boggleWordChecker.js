let n = [];
const neighbours = d => [-d - 1, -d, -d + 1, -1, 1, d - 1, d, d + 1];

//walkt through neighbours to find word
function startWalk(pos, next) {
  //check if word is completed
  if (next === word.length) return true;
  for (let i = 0; i < n.length; i++) {
    const el = n[i];

    if (board[pos + el] === word[next]) {
      //visited
      board[pos + el] = "-" + board[pos + el];
      if (startWalk(pos + el, next + 1)) return true;
      //unvisit
      board[pos + el] = board[pos + el].slice(1);
      //if we are at second char(next=1), we returned back to start pos and tried all its neighbours than we couldn't find word on board
      if (next === 1 && i === n.length - 1) return false;
    }
  }
}
let board = [];
let word = "";
function checkWord(brd, wrd) {
  // find entry points
  const arrEntry = [];
  const dimension = brd[0].length;
  word = "";
  word = wrd;

  //determine neighbours
  n = [];
  //we will add a frame of dots to board, for disabling out of range diagonal moves
  n = neighbours(dimension + 2);
  //prepare board to walk through
  board = [];
  //board = brd.flat();

  //if flat doesn't work
  for (let i = 0; i < dimension + 2; i++)
    for (let j = 0; j < dimension + 2; j++)
      if (i === 0 || j === 0 || i === dimension + 1 || j === dimension + 1)
        board.push(".");
      else board.push(brd[i - 1][j - 1]);

  //find entry points
  board.forEach((el, i) => {
    if (el === word[0]) arrEntry.push(i);
  });
  //if there is not entry point word doesnt exist in board
  if (!arrEntry.length) return false;

  for (let i = 0; i < arrEntry.length; i++) {
    const el = arrEntry[i];
    board[el] = "-" + board[el];
    // start walking with entry point with next char (word[0] already checked)
    if (startWalk(el, 1)) return true;
    board[el] = board[el].slice(1);
  }
  //couldn't find word
  return false;
}

const testBoard = [
  ["T", "T", "M", "D", "A"],
  ["G", "Y", "I", "N", "N"],
  ["P", "A", "L", "C", "E"],
  ["I", "A", "U", "L", "G"],
  ["A", "M", "I", "N", "A"],
];
console.log(checkWord(testBoard, "MINGLE"));
//Test case: 'T' (expected: true)

/*
const testBoard = [
    ["E", "A", "R", "A"],
    ["N", "L", "E", "C"],
    ["I", "A", "I", "S"],
    ["B", "Y", "O", "R"],
  ];

console.log(checkWord(testBoard, "C"));
console.log(checkWord(testBoard, "RSCAREIOYBAILNEA"));
console.log(checkWord(testBoard, "EARS"));
console.log(checkWord(testBoard, "CARS"));
*/
/*
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.

*/
