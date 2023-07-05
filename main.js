const prompt = require('prompt-sync')()
const { error } = require('console')
const fs = require('fs')

let somedata = null

const data = fs.readFileSync(__dirname + '/some.json','utf-8')
    
console.log(data)
