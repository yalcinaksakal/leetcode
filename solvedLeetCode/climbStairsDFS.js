var climbStairsDFS = function (n) {
  const map = {};
  //const permute = [];  //for memorizing chosen steps

  let count = 0,
    steps = 0;

  const dfs = () => {
    if (steps > n) return;
    if (steps === n) {
      //console.log(permute.join(""));
      count++;
      return;
    }

    [1, 2].forEach(s => {
      //permute.push(s);
      steps += s;
      dfs();
      steps -= s;
      //permute.pop();
    });
  };

  dfs();

  return count;
};
