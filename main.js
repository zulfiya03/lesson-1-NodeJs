const prompt = require('prompt-sync')()
const fs = require('fs')

fs.readFile(__dirname + "/some.json", 'utf-8', (err, data) => {
    if(err){
        console.log('Error:',err)
    }
    console.log(data);
})

const obj = {
    key: value
}

fs.writeFile(__dirname + '/some.json','Typescript', 'utf-8', (err) => {
    if(err) {
        console.log('Error:', err);
    }
})

// const age = prompt('Yoshingizni kiriting: ')

// console.log(age)