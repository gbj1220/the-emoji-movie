const day = require('./day.js')


const arg2 = process.argv[2]
let i = 0
const testing = (() => {
  if (day[i] === undefined) {
    clearInterval(newInterval)
  } else {
    console.log(day[i])
  } i++
})


const newInterval = setInterval(testing, arg2)
