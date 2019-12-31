 const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Mike.')

// challenge: append a message to the notes.txt file
// 1. use appendFileSync to append to file
// 2. run script
// 3. check your work by opening file and viewing appended text

fs.appendFileSync('notes.txt', "\nI currently live in St. Petersburg, Florida.")
