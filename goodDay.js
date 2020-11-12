const day = require('./day.js')


let i = day.length - 1;
console.log('Have a great day!')
const testing = (() => {
  if (day[i] === undefined) {
    console.log('Tomorrows a new day!')
    clearInterval(newInterval,)
  } else {
    console.log(day[i], console.clear(day[i]))
  } i--
})


const newInterval = setInterval(testing, 1000)
