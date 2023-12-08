'use strict'

const sampleData = `Time:      7  15   30
Distance:  9  40  200`

const data = `Time:        53837288
Distance:   333163512891532`



const [time , distance] = data.split(`\n`)

const timeArrStr = time.slice(time.indexOf(':') + 2).split(` `);
const distArrStr = distance.slice(distance.indexOf(':') + 2).split(` `);
const time2 = 53837288;
const dist2 = 333163512891532;
//  console.log(timeArrStr2);
//  console.log(distArrStr2);
 

const removeBlanks = function (Arr) {
    const returnArr =[]
    Arr.forEach(element => {
        if (element !== ``) {
            returnArr.push(Number(element))
        }      
    });
    return returnArr
}

const times = removeBlanks(timeArrStr);
const distances = removeBlanks(distArrStr);


// console.log(times);
// console.log(distances);


const countOptions = function (distance, time) {
    let result = 0;
    let speed = [0 , time]
    while (0 < speed[1]) {
        if (speed[0] * speed[1] > distance) {
            result++
        }
        speed[0]++
        speed[1]--
    }
    return result
}

const result = function (dist, t) {
    let counts = [];
    dist.forEach((d, i) => {
        //console.log(d, i, t[i]);
        
        counts = counts.concat((countOptions( d, t[i])))
    });   
 
    
    return counts
}

 const resultsArr = result(distances,times);

console.log(countOptions(dist2, time2));

//  console.log(resultsArr.reduce((a,b)=> a*b));
 