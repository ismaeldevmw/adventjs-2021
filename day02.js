const myLetter = 'bici coche  balón _playstation bici coche  peluche'

function listGifts(letter) {
  let giftList = letter.split(' ');

  console.log(giftList)

  const resultObject = {}
  let currentElement = ''
  let counter = 0

  giftList.map(gift => {
    currentElement = gift
    counter = 0

    if (!currentElement.includes('_') && !!currentElement) {
      giftList.map(giftIterator => {
        if (currentElement === giftIterator) {
          counter += 1
        }
        resultObject[`${currentElement}`] = counter
      })
    }
  })

  return resultObject
}

const gifts = listGifts(myLetter)
console.log(gifts)