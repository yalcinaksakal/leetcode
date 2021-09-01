function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  let temp, i;
  for (i = 0; i < array.length; i++) {
    if (array[i] + "" === "0") {
      let j = i + 1;
      temp = array[i];

      while (array[j] + "" === "0" && j < array.length) {
        let temp2 = array[j];
        array[j] = temp;
        temp = temp2;
        j++;
      }

      if (j !== array.length) {
        array[i] = array[j];
        array[j] = temp;
      } else {
        break;
      }
    }
  }

  if (i !== array.length) {
    while (i < array.length - 1) {
      array[i] = array[i + 1];
      i++;
    }
    array[i] = temp;
  }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, "0", 0, 13, 0, 78, 0, 0, 19, 14]));
//mine is working but
//real solution is
function realRemoveZeros(array) {
  const head = [];
  const tail = [];
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e;
    } else {
      head[head.length] = e;
    }
  }
  return [...head, ...tail];
}
