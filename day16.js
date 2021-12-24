function decodeNumbers(symbols) {
  const regex = /[^.,:;!]/g;
  const found = symbols.match(regex);
  if (found) return NaN;

  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };

  let result = 0;
  let beforeValue = 0;

  symbols.split('').map((symbol) => {
    if (values[symbol] > beforeValue) {
      // console.log(values[symbol],beforeValue)
      result += values[symbol] - (beforeValue + beforeValue);
    } else {
      result += values[symbol];
    }
    beforeValue = values[symbol];
  });

  return result;
}

console.log(decodeNumbers('...')); // 3
console.log(decodeNumbers('.,')); // 4 (5 - 1)
console.log(decodeNumbers(',.')); // 6 (5 + 1)
console.log(decodeNumbers(',...')); // 8 (5 + 3)
console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')); // 49 (50 - 1)
console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')); // 300
console.log(decodeNumbers(';.W')); // NaN
console.log(decodeNumbers(';!')); // 50
