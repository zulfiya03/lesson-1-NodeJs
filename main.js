const prompt = require('prompt-sync')()
const fs = require('fs')

fs.readFile(__dirname + "/some.txt", 'utf-8', (err, data) => {
    if(err){
        console.log('Error:',err)
    }
    console.log(data);
})

fs.writeFile(__dirname + '/some.txt','Typescript', 'utf-8', (err) => {
    if(err) {
        console.log('Error:', err);
    }
})

// const age = prompt('Yoshingizni kiriting: ')

// console.log(age)