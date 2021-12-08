let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit 3234."
  .toLocaleLowerCase()
  .replace(/[^a-zA-Z0-9 ]/g, "")
  .split(" ");
console.log(paragraph);
