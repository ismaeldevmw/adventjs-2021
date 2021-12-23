function shouldBuyFidelity(times) {
  const ticket = 12 * times;
  let fidelidadCost = 250;

  for (let i = 1; i <= times; i++) {
    // console.log(12 * (0.75 ** i))
    fidelidadCost += 12 * 0.75 ** i;
    console.log(fidelidadCost)
  }

  return ticket > fidelidadCost;
}

console.log(shouldBuyFidelity(24))
