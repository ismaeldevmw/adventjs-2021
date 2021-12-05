let input = "bici coche (balón) bici coche peluche"

function isValid(letter) {
   let characters = letter.split('')
   console.log(characters)
   let openParenthesis = 0
   let closeParenthesis = 0

   characters.map(character => {
      if (character === '(') {
         openParenthesis += 1
      } else if (character === ')') {
         closeParenthesis += 1
      }
   })

   if (openParenthesis === closeParenthesis &&
      openParenthesis > 0 &&
      closeParenthesis > 0 &&
      !letter.match(/[\[\[{}]/g) &&
      !letter.match(/[(]\W+[)]|[(][)]/)
   ) {
      return true
   } else {
      return false
   }
}

const isValidLetter = isValid(input)
console.log(isValidLetter)