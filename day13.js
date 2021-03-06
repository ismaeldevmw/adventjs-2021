function wrapGifts(gifts) {
  if (gifts.lenght === 0) return []
  
  const giftLen = gifts.length
  const itemSize = gifts[0].lastIndexOf("")
  const maxSize = giftLen + itemSize
  
  let result = []
  let wrap = ''
  let iterator = giftLen === 1 ? 0 : 1
  for (iterator; iterator <= maxSize; iterator++) {
    wrap += '*'
  }
  
  result.push(wrap)

  gifts.forEach(gift => {
    result.push(`*${gift}*`)
  })

  result.push(wrap)

  return result
}

console.log(wrapGifts(["ðð¸", "ð®ð§¸"]))
console.log(wrapGifts(["â½ï¸"]))

// Si solo es un ð deberÃ­a ser ['****', '*ð*', '****']