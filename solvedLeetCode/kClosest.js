const kClosest = (points, k) =>
  points
    .map((p, i) => ({ d: p[0] ** 2 + p[1] ** 2, i }))
    .sort((a, b) => a.d - b.d)
    .filter((p, i) => i < k)
    .map(p => points[p.i]);
console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
