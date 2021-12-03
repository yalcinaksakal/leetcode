var reorderLogFiles = function (logs) {
  const lLogs = [],
    dLogs = [];
  let key, content, tempLog;
  for (const log of logs) {
    tempLog = log.split(" ");
    key = tempLog.shift();
    content = +tempLog.join("");
    if (content && typeof content === "number") dLogs.push(log);
    else lLogs.push({ key, content: tempLog.join(" ") });
  }

  lLogs.sort((a, b) => {
    if (a.content < b.content) return -1;
    if (a.content > b.content) return 1;

    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  });

  console.log(lLogs);

  return [...lLogs.map(log => log.key + " " + log.content), ...dLogs];
};

console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
