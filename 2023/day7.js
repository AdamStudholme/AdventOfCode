'use strict'

const cardScores = {
    A: 13,
    K: 12,
    Q: 11,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2
}



const sampleData = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`


const ace = "A"

const checkHand = function (hand, score) {
    const handArr = hand.split(``)
    console.log(handArr);
    
    let handObj = {};
    handArr.forEach(char => {
        if (char in handObj) {
            handObj[char] += 1
        } else {
            handObj[char] = 1
        }
    });
    return handObj
}

console.log(checkHand(`KK677`, 684));
