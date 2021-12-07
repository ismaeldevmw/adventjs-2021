const dayInMilliseconds = 1000 * 60 * 60 * 24; // 86,400,000 milliseconds in a day

function daysToXmas(date) {
  const christmasDate  = Date.parse('Dec 25, 2021')
  const compareDate = Date.parse(date)

  // diff in milliseconds
  const diff = compareDate - christmasDate

  // get the rest of days, but we need the intenger in despite of Christmas will be in 1 second
  const days = Math.floor((diff / dayInMilliseconds)) * -1

  return days
}

console.log(daysToXmas(new Date('Dec 24, 2021 23:59:59')));