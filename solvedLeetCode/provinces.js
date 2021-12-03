var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const provinces = [];
  let neigbours, index;
  for (let i = 0; i < n; i++) {
    neigbours = new Set([i]);
    for (let j = i + 1; j < n; j++) if (isConnected[i][j]) neigbours.add(j);
    index = provinces.findIndex(s => s.has(i));
    if (index === -1) provinces.push(neigbours);
    else provinces[index].add(...neigbours);
  }
  return provinces.length;
};
console.log(
  findCircleNum([
    [
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 0, 1, 1],
    ],
  ])
);
