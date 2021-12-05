var numSubmat = function (mat) {
  const m = mat.length,
    n = mat[0].length;
  let res = 0,
    k,
    r;
  const count = (i, j) => {
    r = m;
    while (j < n && mat[i][j]) {
      k = i;

      while (k < r && mat[k][j]) {
        res++;
        k++;
      }

      r = Math.min(k, r);
      j++;
    }
  };
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) count(i, j);

  return res;
};
console.log(
  numSubmat([
    [1, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
  ])
);
console.log(
  numSubmat([
    [1, 1],
    [0, 1],
  ])
);
