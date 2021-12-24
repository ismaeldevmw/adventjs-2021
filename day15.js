function checkSledJump(heights) {
  const max = Math.max(...heights);
  const maxIndex = heights.indexOf(max);
  if (maxIndex === 0 || maxIndex === heights.length - 1) return false;
  if (heights.lastIndexOf(max) !== maxIndex) return false;
  let arrLeft = heights.slice(0, maxIndex + 1);
  let arrRight = heights.slice(maxIndex, heights.length);
  let rightResult = false;
  let leftResult = false;
  for (let i = 0; i < arrLeft.length - 1; i++) {
    if (arrLeft[i] === arrLeft[i + 1]) return false;
    leftResult = arrLeft[i] < arrLeft[i + 1];
  }
  for (let i = 0; i < arrRight.length - 1; i++) {
    if (arrLeft[i] === arrLeft[i + 1]) return false;
    rightResult = arrRight[i] > arrRight[i + 1];
  }
  return leftResult && rightResult;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
