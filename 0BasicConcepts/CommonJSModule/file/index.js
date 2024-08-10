// 1.Common JS

const { createFile } = require('./util')

//createFile('test.txt', 'Hello World!')

// const fs  = require('fs')

// console.log(fs.readdirSync('.'))

const _fs  = require('fs')

console.log(_fs.readFileSync('index.js', 'utf8'))
//val(_fs.readFileSync('index.js', 'utf8')) // infinite loop just reading and writing

// const fs = _fs.promises
// console.log(fs.readdir.toString())
/*
;(async()=>{
    console.log(await fs.readdir('.'))
})();
*/
//console.log(fs)