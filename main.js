//////////add new massive///////////////////////
// const prompt = require('prompt-sync')()
// const { error } = require('console')
// const fs = require('fs')

// const data = fs.readFileSync(__dirname + '/some.json','utf-8')
// const users = JSON.parse(data)

// users.users.push({
//     id: Date.now(),
//     name: 'Kim',
// });

// fs.writeFileSync(__dirname + '/some.json', JSON.stringify(users), 'utf-8')

// console.log(data)

///////////////change massive/////////////////////////////

// const prompt = require('prompt-sync')()
// const fs = require('fs')

// const data = fs.readFileSync(__dirname + '/some.json','utf-8')
// const dataobj = JSON.parse(data)

// // const name = prompt('ismingizni kiriting: ')

// // users.users.push({
// //     id: Date.now(),
// //     name,
// // });

// const newUsers = dataobj.users.map(function(item, index){
//     if(item.id === 2){
//         return {
//             id: item.id,
//             name: 'Item'
//         }
//     }
//     return item
// })

// dataobj.users = newUsers

// fs.writeFileSync(__dirname + '/some.json', JSON.stringify(dataobj), 'utf-8')

// console.log(data)

/////////////////delete massive///////////////////////////////

const prompt = require('prompt-sync')()
const fs = require('fs')

const data = fs.readFileSync(__dirname + '/some.json','utf-8')
const dataobj = JSON.parse(data)

const newUsers = dataobj.users.filter(function(item, index){
    if(item.id === 2){
        return 
    }
    return item
})

dataobj.users = newUsers

fs.writeFileSync(__dirname + '/some.json', JSON.stringify(dataobj), 'utf-8')

console.log(data)