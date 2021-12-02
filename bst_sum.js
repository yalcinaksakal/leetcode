var hammingDistance = function (x, y) {
  const binX = (x >>> 0).toString(2),
    binY = (y >>> 0).toString(2);
  let result = Math.max(binX.length, binY.length);
  let i = 1,
    temp,
    temp1;
  while (binX.length - i >= 0 || binY.length - i >= 0) {
    temp = binY.length - i < 0 ? "0" : binY[binY.length - i];
    temp1 = binX.length - i < 0 ? "0" : binX[binX.length - i];
    console.log(temp, temp1);
    if (temp === temp1) result--;
    i++;
  }
  return result;
};

console.log(hammingDistance(1, 4));
