const isValid = s => {
  if (s.length % 2) return false;

  if (s.replace(/\(/g, "").length !== s.length / 2) return false;

  let numOpen = 0;

  for (let i = 0; i < s.length; i++) {
    if (numOpen < 0) return false;
    numOpen += s[i] === "(" ? 1 : -1;
  }

  return numOpen === 0;
};
