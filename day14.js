function missingReindeer(ids) {
  if (ids.length === 1) return ids[0] === 0 ? ids[0] + 1 : ids[0] - 1;

  ids.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  if (ids[1] === 2) return 1;

  let i = 0;
  let result = '';

  while (ids[i + 1] === ids[i] + 1) {
    i++;
    result = ids[1] === 2 ? ids[i - 1] : ids[i] + 1;
  }
  return result;
}

console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([1])); // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
