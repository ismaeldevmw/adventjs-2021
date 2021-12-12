const pricesBtc = [39, 18, 29, 25, 34, 32, 5]

function maxProfit(prices) {
  const half = Math.ceil(prices.length / 2);
  const leftHalf = prices.splice(0, half);   
  const rightHalf = prices.splice(-half);

  const buyPrice = Math.min(...leftHalf)
  const sellPrice = Math.max(...rightHalf)

  const profit = sellPrice - buyPrice

  if(profit <= 0) return -1

  return profit
}

maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)