function canMouseEat(direction, game) {
  let index = [game.findIndex((x) => x.find((e) => e === 'm'))];
  index = [...index, game[index[0]].findIndex((x) => x === 'm')];
  let directions = {
    up: (index = [], game = []) => {
      for (let i = index[0] - 1; i >= 0; i--)
        if (game[i][index[1]] === '*') return true;
      return false;
    },
    down: (index = [], game = []) => {
      for (let i = index[0] + 1; i < game.length; i++)
        if (game[i][index[1]] === '*') return true;
      return false;
    },
    left: (index = [], game = []) => {
      for (let i = index[1] - 1; i >= 0; i--)
        if (game[index[0]][i] === '*') return true;
      return false;
    },
    right: (index = [], game = []) => {
      for (let i = index[1] + 1; i < game.length; i++)
        if (game[index[0]][i] === '*') return true;
      return false;
    },
  };
  return directions[direction](index, game);
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

console.log(canMouseEat('up', room)); // false
console.log(canMouseEat('down', room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left', room)); // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
];

console.log(canMouseEat('up', room2)); // false
console.log(canMouseEat('down', room2)); // false
console.log(canMouseEat('right', room2)); // true
console.log(canMouseEat('left', room2)); // false
