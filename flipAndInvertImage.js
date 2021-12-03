var flipAndInvertImage = function (image) {
  const n = image.length;
  let row;
  for (let i = 0; i < n; i++) {
    console.log(image[i].join("").reverse());
    for (let j = 0; j < n; j++) image[i][j] = 1 - image[i][j];
  }
  return image;
};
console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
