function validateBattlefield(field) {
  //corners of ship division should be empty
  const cornerCheck = (i, j) => {
    if (i < 9 && i > 0) {
      if (
        field[i - 1][j - 1] === 1 ||
        field[i - 1][j + 1] === 1 ||
        field[i + 1][j - 1] === 1 ||
        field[i + 1][j + 1] === 1
      )
        return false;
    }
    if (i === 9) {
      if (field[i - 1][j - 1] === 1 || field[i - 1][j + 1] === 1) return false;
    }
    if (i === 0) {
      if (field[i + 1][j - 1] === 1 || field[i + 1][j + 1] === 1) return false;
    }

    return true;
  };

  //number of ships, eg:number of submarines(has single division) is numberOfShips[1] =4
  const numberOfShips = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const validNumberOfShips = [0, 8, 3, 2, 1, 0, 0, 0, 0, 0]; //4 ships have 1 div (horizantally and vertically counted, so 2 times 4), 3 ships have 2 divs, 2 ships have 1 divs, 1 ship has 4 divs
  //keys=ship length,pos x, pos y
  //horizantal search
  for (let i = 0; i < 10; i++) {
    let j = 0;
    while (j < 10) {
      if (field[i][j]) {
        if (!cornerCheck(i, j)) return false;
        let k = j;
        //find length
        while (field[i][k]) k++;
        //end of ship, (while loop incresed k one more)
        k--;

        let check = true;
        if (i === 0) check = !field[i + 1][j];
        else if (i === 9) check = !field[i - 1][j];
        else check = !field[i - 1][j] && !field[i + 1][j];
        //if has one div (searching horizantally so up and down should be empty)
        if (k === j && check) {
          numberOfShips[1]++;
          console.log(i, j);
        }
        //if has k-j divs
        if (k - j) numberOfShips[k - j + 1]++;
        j = k + 1;
      } else j++;
    }
  }
  //vertical search (all corners checked, no need to check again)
  for (let i = 0; i < 10; i++) {
    let j = 0;
    while (j < 10) {
      if (field[j][i]) {
        let k = j;
        while (field[k][i]) k++;
        //end of ship, (while loop incresed k one more)
        k--;
        //if has one div (searching vertically so left and right should be empty)

        if (k === j && !field[j][i - 1] && !field[j][i + 1]) {
          numberOfShips[1]++;
          console.log(j, i);
        }
        //if has k-j divs
        if (k - j) numberOfShips[k - j + 1]++;
        j = k + 1;
      } else j++;
    }
  }

  for (let i = 0; i < 10; i++)
    if (numberOfShips[i] !== validNumberOfShips[i]) return false;
  return true;
}

/*

Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.
*/

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
