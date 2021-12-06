function createXmasTree(height) {
  let result = '';
  let trunk = '';

  for (var iterator = 0; iterator < height; iterator++) {
    for (var space = 1; space < height - iterator; space++) {
      if (iterator === 0) trunk += '_';
      result += '_';
    }

    for (var symbol = 0; symbol <= iterator; symbol++) {
      if (iterator === 0) trunk += '#';
      if (symbol === 0) {
        result += '*';
      } else {
        result += '**';
      }
    }

    for (var space = 1; space < height - iterator; space++) {
      if (iterator === 0) trunk += '_';
      result += '_';
    }

    result += '\n';
  }
  result += trunk + '\n';
  result += trunk;

  return result;
}

console.log(createXmasTree(5));
