const prompt = require('prompt-sync')()
const { error } = require('console')
const fs = require('fs')

const data = fs.readFileSync(__dirname + '/some.json','utf-8')
const users = JSON.parse(data)

users.users.push({
    id: Date.now(),
    name: 'Kim',
});

fs.writeFileSync(__dirname + '/some.json', JSON.stringify(users), 'utf-8')

console.log(data)
