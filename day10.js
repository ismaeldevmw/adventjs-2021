function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1]
  const result = [0, 0, 0, 0, 0, 0]

  coins.map((item, index) => {
    console.log(change - item, change, item)
		while (change - item >= 0) {
			change -= item;
      console.log(change)
			result[index] += 1;
		}
	});

  return result.reverse()
}

console.log(getCoins(82))