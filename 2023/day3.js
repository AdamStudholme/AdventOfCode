'use strict'

const sampleData = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

let data = sampleData;

let schematics =[]

console.log(`467..114..`.split(``));


const schematicRow = function (str , i , arrLength) {
    const strArr = str.split(``)
    const currNum = new Array(3).fill("") // store number, start index, end index
    let numFound = false
    let numStarted = false
    let partFound = false

    const reset = () => {
        partFound = false
        numFound = false
        numStarted = false
        currNum[0] = ""
        currNum[1] = ""
        currNum[2] = ""
    }

    strArr.forEach((char, ind) => {
        if (Number(char) && !numStarted) { // At start of number save index
            numStarted = true
            currNum[1] = ind
                    }
        if (Number(char)) { // save char into number str
            numFound = true
            currNum[0] += char
        } else if (Number(currNum[0] && numFound)) { //When num ends
            currNum[2] = ind
            if ((currNum[1] > 0 && str[currNum[1] - 1] !== `.`) || (str[currNum[2]] !== `.`)) {
                schematics.push(Number(currNum[0]))
                console.log(currNum);                
                
                } 
                reset()
            } else // Need to impliment function to check row above and below
        })
    
    return schematics
}

