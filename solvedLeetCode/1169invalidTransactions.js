// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]
var invalidTransactions = function (transactions) {
  const invalids = new Set();
  const personsTransactions = {};
  for (i = 0; i < transactions.length; i++) {
    t = transactions[i];
    data = t.split(",");
    if (+data[2] > 1000) invalids.add(i);
    if (!personsTransactions[data[0]]) personsTransactions[data[0]] = [];
    personsTransactions[data[0]].push({
      time: +data[1],
      amount: +data[2],
      city: data[3],
      tNo: i,
    });
  }
  Object.keys(personsTransactions).forEach(key => {
    const arr = personsTransactions[key];
    for (i = 0; i < arr.length; i++)
      for (j = 0; j < arr.length; j++) {
        if (
          i === j ||
          arr[i].city === arr[j].city ||
          Math.abs(arr[i].time - arr[j].time) > 60
        )
          continue;
        invalids.add(arr[i].tNo);
        invalids.add(arr[j].tNo);
      }
  });

  result = [];
  for (const index of invalids) {
    result.push(transactions[index]);
  }
  return result;
};

console.log(
  invalidTransactions([
    "alice,20,800,mtv",
    "bob,50,1200,mtv",
    "alice,20,800,mtv",
    "alice,50,1200,mtv",
    "alice,20,800,mtv",
    "alice,50,100,beijing",
  ])
);

console.log(
  invalidTransactions([
    "bob,121,1984,zurich",
    "maybe,53,532,shanghai",
    "alex,83,721,bangkok",
    "maybe,906,1091,beijing",
    "alex,161,970,taipei",
    "iris,691,1961,milan",
    "xnova,272,838,amsterdam",
    "alex,462,1069,toronto",
    "chalicefy,456,530,beijing",
    "chalicefy,699,617,zurich",
    "lee,247,526,luxembourg",
    "xnova,97,223,paris",
    "xnova,31,338,barcelona",
    "bob,348,1280,hongkong",
    "maybe,542,393,warsaw",
    "bob,362,653,luxembourg",
    "iris,290,929,zurich",
    "bob,887,731,jakarta",
    "xnova,863,459,taipei",
    "xnova,180,159,milan",
    "iris,43,71,taipei",
    "lee,629,611,bangkok",
    "lee,872,8,tokyo",
    "bob,218,985,dubai",
    "chalicefy,993,508,prague",
    "alex,386,229,shenzhen",
    "alex,567,924,madrid",
    "maybe,408,842,barcelona",
    "xnova,503,891,chicago",
    "chalicefy,921,378,chicago",
    "alex,935,697,munich",
    "lee,305,1825,moscow",
    "iris,429,200,mexico",
    "alex,325,798,moscow",
    "alex,698,789,singapore",
    "maybe,628,378,prague",
    "xnova,424,1674,moscow",
    "bob,859,347,jakarta",
    "lee,498,806,hongkong",
    "alex,740,634,taipei",
    "maybe,862,1798,warsaw",
    "chalicefy,102,1562,warsaw",
    "maybe,284,1300,moscow",
    "iris,172,1241,dubai",
    "lee,519,1629,madrid",
    "bob,489,796,frankfurt",
    "iris,971,1828,frankfurt",
    "lee,470,596,rome",
    "alex,746,1760,rome",
    "iris,420,330,frankfurt",
    "lee,967,1176,milan",
    "lee,354,466,toronto",
    "chalicefy,372,1590,taipei",
    "xnova,584,433,shenzhen",
    "bob,121,491,chicago",
    "chalicefy,965,600,moscow",
    "alex,77,986,luxembourg",
    "lee,319,864,warsaw",
    "bob,574,1493,barcelona",
    "xnova,308,73,frankfurt",
    "lee,112,1809,bangkok",
    "chalicefy,174,292,mexico",
    "lee,764,583,bangkok",
    "bob,612,628,amsterdam",
    "maybe,930,688,luxembourg",
    "bob,768,976,zurich",
    "alex,526,966,milan",
    "iris,378,487,budapest",
    "alex,501,1623,tokyo",
    "alex,508,559,prague",
    "lee,173,655,milan",
    "bob,658,69,madrid",
    "bob,279,339,luxembourg",
    "iris,640,1611,budapest",
    "lee,275,67,guangzhou",
    "xnova,10,368,warsaw",
    "chalicefy,804,259,rome",
    "bob,386,574,hongkong",
    "iris,766,1413,rome",
    "iris,59,963,beijing",
    "maybe,500,844,milan",
    "chalicefy,18,1059,zurich",
    "maybe,89,473,shanghai",
    "lee,790,574,barcelona",
    "alex,84,702,toronto",
    "xnova,519,22,bangkok",
    "xnova,701,878,newdelhi",
    "alex,85,21,tokyo",
    "alex,227,940,beijing",
    "lee,912,710,bangkok",
    "maybe,312,958,mexico",
    "bob,983,759,shenzhen",
    "maybe,495,175,istanbul",
    "chalicefy,129,1875,guangzhou",
    "iris,64,508,budapest",
    "bob,870,3,madrid",
    "lee,265,217,amsterdam",
    "alex,306,42,hongkong",
    "lee,889,927,zurich",
    "maybe,771,153,milan",
    "iris,340,716,hongkong",
    "xnova,248,775,moscow",
    "alex,887,1782,rome",
    "xnova,356,274,taipei",
    "bob,637,532,beijing",
    "iris,239,98,tokyo",
    "bob,199,284,hongkong",
    "lee,452,740,montreal",
    "lee,500,519,mexico",
    "lee,942,1683,rome",
    "bob,802,1881,paris",
    "bob,824,294,bangkok",
    "maybe,498,1993,chicago",
    "lee,968,699,istanbul",
    "alex,408,314,mexico",
    "lee,762,87,chicago",
    "iris,50,566,guangzhou",
    "alex,713,813,toronto",
    "maybe,808,4,taipei",
    "iris,313,672,munich",
    "alex,711,1745,dubai",
    "bob,211,1104,munich",
    "lee,217,1756,shenzhen",
    "bob,785,203,beijing",
    "lee,3,602,singapore",
    "maybe,921,10,montreal",
    "iris,543,711,toronto",
    "maybe,543,0,prague",
    "chalicefy,919,548,hongkong",
    "alex,910,1325,moscow",
    "alex,659,1525,moscow",
    "alex,342,102,jakarta",
    "xnova,477,761,newdelhi",
    "bob,175,629,singapore",
    "chalicefy,458,708,montreal",
    "chalicefy,7,1593,munich",
    "iris,743,234,warsaw",
    "maybe,545,496,montreal",
    "alex,531,1032,shenzhen",
    "lee,137,852,taipei",
    "lee,993,963,mexico",
    "bob,418,661,dubai",
    "xnova,344,510,shenzhen",
    "maybe,71,1498,zurich",
    "maybe,546,829,zurich",
    "lee,390,116,warsaw",
    "lee,701,295,istanbul",
    "bob,190,1608,dubai",
    "maybe,373,1335,warsaw",
    "iris,1000,1965,munich",
    "maybe,772,783,munich",
    "iris,993,82,madrid",
    "bob,236,930,prague",
    "alex,825,400,madrid",
    "alex,334,1792,hongkong",
    "chalicefy,633,51,singapore",
    "lee,139,939,taipei",
    "bob,60,784,milan",
    "alex,356,1879,rome",
    "xnova,390,1518,budapest",
    "maybe,110,383,montreal",
    "chalicefy,257,1683,paris",
    "iris,126,101,madrid",
    "xnova,547,1305,bangkok",
    "iris,358,914,newdelhi",
    "lee,771,543,guangzhou",
    "xnova,668,1807,chicago",
    "iris,956,1795,taipei",
    "bob,674,440,jakarta",
    "lee,414,1954,moscow",
    "lee,76,279,warsaw",
    "iris,377,1834,barcelona",
    "xnova,173,1166,barcelona",
    "xnova,1,1253,madrid",
    "bob,173,242,dubai",
    "xnova,260,618,montreal",
    "chalicefy,228,1075,hongkong",
    "alex,448,1029,prague",
    "alex,766,1218,madrid",
    "iris,48,541,milan",
    "chalicefy,657,998,zurich",
    "chalicefy,897,562,jakarta",
    "bob,140,775,munich",
    "chalicefy,953,683,moscow",
    "chalicefy,935,606,beijing",
    "iris,999,415,newdelhi",
    "iris,972,940,toronto",
    "lee,118,446,shenzhen",
    "iris,99,1987,amsterdam",
    "chalicefy,454,1295,taipei",
    "maybe,571,1312,bangkok",
    "bob,616,191,milan",
    "xnova,812,270,barcelona",
    "xnova,267,1636,frankfurt",
    "iris,425,228,moscow",
    "chalicefy,639,512,paris",
    "iris,562,78,madrid",
    "bob,323,325,warsaw",
    "iris,88,247,mexico",
    "bob,399,392,jakarta",
  ])
);
