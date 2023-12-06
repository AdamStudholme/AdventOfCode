'use strict'

const sampleData =`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

const dataSplit = function (data) {    
    return data.split(`\n`)
}

let total = 0;

const sumStrNumbers = function (data) {
   data.forEach(str => {
       const firstNum = /\d/.exec(str)
       console.log(firstNum);
       const reversed = str.split('').reverse().join('')
       const lastNum = /\d/.exec(reversed)
       
    })
}

sumStrNumbers(dataSplit(sampleData))

