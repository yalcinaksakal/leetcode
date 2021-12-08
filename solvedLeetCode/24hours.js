var largestTimeFromDigits = function (arr) {
  let visited = {},
    result = { h: -1, m: -1 },
    h,
    m,
    ch = [];

  const permute = x => {
    if (ch.length === 4) {
      h = [ch[0], ch[1]].join("");
      m = [ch[2], ch[3]].join("");
      if (
        +h < 24 &&
        +m < 60 &&
        (+h > +result.h || (+h === +result.h && +m > +result.m))
      )
        result = { h, m };
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (i !== x && !visited[i]) {
        ch.push(arr[i]);
        visited[i] = 1;
        permute(i);
        ch.pop();
        visited[i] = 0;
      }
    }
  };
  permute(-1);
  return result.h === -1 ? "" : [...Object.values(result)].join(":");
};

console.log(largestTimeFromDigits([4, 5, 1, 7]));
