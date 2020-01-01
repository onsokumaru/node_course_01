const validator = require('validator')
const displayNotes = require('./notes.js')

const myNotes = displayNotes()

console.log(myNotes)

// console.log(validator.isEmail('mike@example.com'))
// console.log(validator.isEmail('example.com'))

console.log(validator.isURL('https://mead.io'))
console.log(validator.isURL('https:/mead.io'))


