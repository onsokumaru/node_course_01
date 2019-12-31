// challenge: define and use a function in a new file
//
// 1. create a new file called notes.js
// 2. create getNotes function that return "you notes"
// 3. export getNotes function
// 4. from app.js, load in and call the function printing the message to the console

const displayNotes = require('./notes.js')

const myNotes = displayNotes()

console.log(myNotes)







// // const name = require('./utils.js')

// // console.log(name)

// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum)