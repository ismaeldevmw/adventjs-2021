const numbers = [0, 2, 2, 3, -1, 1, 5]

function sumPairs2(numbers, result) {
  for(let iterator = 0; iterator < numbers.length; iterator++) {
    for(let comparator = iterator + 1; comparator < numbers.length; comparator++) {
      if(numbers[iterator] + numbers[comparator] === result) return [numbers[iterator], numbers[comparator]];
    }
  }
  return null;
}

console.log(sumPairs2(numbers, 6))