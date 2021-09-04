// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

// Example 1:

// Input: n = 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
// Example 2:

// Input: n = 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

var divisorGame = function (n) {
  const map = { 1: false, 2: true, 3: false, 4: true, 5: false };

  const pickNum = m => {
    let numToPick = null;
    for (j = m - 1; j > 0; j--)
      if (m % j === 0 && map[m - j] === false) {
        numToPick = j;
        break;
      }
    map[m] = numToPick ? true : false;
  };
  //alice's turn 0, Bob's 1
  if (n < 6) return map[n];
  for (i = 6; i <= n; i++) {
    pickNum(i);
  }
  return map[n];
};
console.log(divisorGame(9));
