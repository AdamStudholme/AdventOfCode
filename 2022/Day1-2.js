"use strict";

const sampleData = `A Y
B X
C Z`;

const gameData = `C X
C X
A Y
C X
B Y
A X
A Z
B Y
C Z
C Z
B X
C Z
B Y
C Z
B Y
A Z
B Y
C X
C X
C X
B X
C Z
C X
C Z
C X
A Y
B Y
B Z
A X
C X
C Z
C Z
A Z
B Y
C Z
C X
C X
C Z
B Y
C Z
C Z
C X
B X
B X
A Y
C Z
C Z
B Y
B Y
C Z
C X
A Z
C X
C Z
C Z
B X
C Z
C Z
B Y
A Y
B X
C X
C X
C Z
C X
A Y
C X
C Z
A Z
B Y
C Z
C X
C X
C Z
C Z
C Z
A Z
C Z
A Z
A Z
C X
B Y
C X
C X
A Z
C X
A Y
C Z
C Z
A Y
A Z
C Z
C Z
A Y
C Z
C Y
B Y
B Y
A Z
A Y
C Z
C Z
A Z
C Z
A Y
B Z
C X
C Z
C X
B Y
C Z
C X
B Y
B X
A Y
C Z
C Z
C Z
B Z
A Y
C Z
C Z
C X
C Z
C X
A Y
C Z
C Z
C X
B Y
B X
B Y
C Z
C X
B X
C Z
C Z
A Y
C Z
A Z
A Y
C Z
A Y
C X
A Y
C Y
A Z
C X
C X
B Y
B Y
A Y
A Z
C Z
C X
C Z
A Y
B Y
A Y
B X
C Z
C Z
A Z
A Y
C X
C X
C X
A Z
B Y
C Z
C Z
C Z
C X
B Z
C Z
C Z
B Z
C Z
A Z
B Y
A Y
C Z
B Y
B X
B X
C X
C Z
A X
C Z
C X
C X
C X
C X
C X
B Y
C X
C X
A Y
A Y
C Z
C Z
B X
C Z
C Z
C Z
C Z
A Z
C Z
A Z
B Y
B Y
C Z
B Y
C Z
C Z
C Z
C X
B Y
B Y
C Z
A Z
C Z
C X
B Y
C Z
A Z
C Z
C X
C Z
C Z
C X
C X
B Z
A Y
B X
C Z
B Y
C X
C X
C Z
C Z
B X
B X
B Y
A X
C X
A Z
A Z
C Z
B Y
C Z
A Z
B X
C X
B Y
A Z
C X
A X
A Z
B Y
B X
B Y
A Y
C Z
C Z
B X
C Z
C X
B Y
C Z
C Z
A Y
B Y
A Z
A Y
C X
C X
C Z
A Z
C Z
B Z
A Z
A Y
C X
C Z
C X
B Z
C Z
B Y
A Y
B X
A Y
C Z
A Y
C Z
C X
B Y
C X
A Y
A Z
C Z
B Y
C X
A Y
C X
C Z
C X
B Y
C X
C Z
C Z
A Z
B Y
C X
B X
A Z
C X
C X
A Y
B X
C X
A Z
C Z
C Z
C Z
B Y
A Y
C X
C Z
C Z
A Z
C Z
A Y
C X
C X
C X
A Z
B Y
C Z
A Y
C Z
C Z
C X
C Z
A Z
C Z
B Y
C X
C X
C Z
B Z
B Y
C X
C X
A Y
A Z
A Z
A X
C X
A Y
B Y
A Y
A Z
B Y
B Y
A Y
B Y
C X
A Z
B X
C Z
A Z
B X
A Y
B X
B Y
A Y
A X
C Z
B Z
B X
B Z
C Z
C X
B X
B Y
A Y
B Y
B Y
B Y
A Z
A Y
B X
A Y
C X
B Y
B X
B Y
C X
A Y
C X
A Y
C Z
C Z
A Z
C Z
C X
C X
A Z
C X
C X
C X
A Y
A Z
A Z
C Z
B X
C X
C X
C Z
A Y
C X
C X
B X
C Z
C Z
C X
B Z
C X
C X
C Z
A Y
C X
A Z
C Z
C X
B X
B Y
C X
C Z
C X
C Z
A Z
C Z
C X
C Z
C Z
A Z
B X
C X
C Z
C X
C X
C Z
C X
C Z
A Z
A Z
A Z
C Z
C X
A Z
C Z
C Z
C Z
A Z
B Y
C X
B Y
C X
C Z
B Y
C X
C X
A Z
A Z
C X
C Z
C X
C Z
A Z
A Y
C Z
C Z
A Y
B Y
B Y
C Z
B Y
B X
B Z
A Y
A Z
C X
B Y
B Z
B Y
B Z
C Z
B Y
C Z
C Z
B Y
B X
B Z
C X
A Z
C X
C X
C X
A Z
C Z
A Z
C Z
A Y
C Y
B Y
A Z
B Y
C Z
A Z
A Y
B X
C X
C X
C X
C Z
C X
B X
C Z
A Y
C Z
A X
B Y
B Z
C Z
B Y
C Z
B X
B Y
C Z
B X
A Z
B X
B Y
A Y
B Z
C X
C Z
A Z
A Y
A Z
C X
C Z
B Z
A Z
A Z
C X
C Z
C X
C X
A Z
C X
C X
C X
B X
A Y
B Y
B X
B Y
C Z
B Y
B Z
C Z
C X
B Y
C Z
C Z
C Z
C Z
C Z
C Z
A Z
A Z
A Z
C X
C Z
B Y
C Z
C Z
C Z
C Z
C X
C X
A Z
B Y
A Z
B Z
C X
C X
C Z
C Z
C X
A Y
C X
A Y
C Z
A Z
C Z
B X
C Z
C Z
C X
C X
C Z
B Z
A Y
B X
A Y
B Y
A Y
A Z
A Z
C Z
B X
C Z
C X
C Z
C Z
A Z
C X
A Y
C X
A Z
C Z
C X
C Z
A Z
C X
C X
C X
C X
B X
B Y
C X
C Z
C Z
C Z
C Z
A Z
A Z
A Y
C Z
C X
C Z
C Z
C Z
A Y
C X
A Z
C Y
A Z
C Z
C X
A Y
C Z
C X
C X
A Z
B Y
C Z
A Z
C Z
C Z
C Z
B Y
C X
C X
A X
A Y
C Z
A Z
C Z
B Y
C X
B X
C X
C X
A Y
C Z
C Z
C Z
C X
A Z
B Y
A Y
B Z
B Z
B X
A Z
B X
B X
A Z
A Z
C Y
B Y
C Z
A X
C Z
B X
C Z
A Y
A Y
C Z
C Z
A Z
B Y
C Z
C Z
C Z
C X
A Y
C X
B Y
B Y
C X
C Z
C X
B X
A Y
A Y
C Z
C Z
C Z
C Z
C Z
B X
C Z
A Y
B X
A Y
A Z
C Z
C X
B Y
B Y
C Z
C Z
C Z
B Y
C X
B Y
A Y
B X
C Z
C Z
A Y
C X
C Z
A Y
C X
C X
A Z
C Z
B X
A Z
B Y
C Z
A Z
B X
C Z
B Y
C Z
B Y
C X
C Z
B X
C X
B Y
C X
A Y
C Z
C Z
C X
B Y
C X
C Z
C X
C Z
A Z
A Y
C X
C Z
C Z
A Z
C X
B Z
A Z
B Y
C X
A Z
C Z
B Y
C X
C X
C Z
C Z
B Y
A Z
C Z
C X
C Z
A Z
C X
A Z
C Z
C X
C X
C Z
B X
C Z
C Z
C Z
B Y
A X
B Y
C X
A Z
B X
A Z
C Z
C X
C Z
C Z
B Y
B X
C Z
B Z
B Y
B X
C X
C X
C X
C Z
B Y
C Z
C Z
C Z
C Z
C Z
C Z
C X
C Z
A Y
C X
B X
A Y
C X
C X
C Z
C Z
C X
B X
B Y
B Y
C Z
B X
C X
C X
C Z
C Z
A Y
C Z
A Y
C Z
C Z
B Y
A Z
B X
B X
C Z
C Z
A Y
A Y
C Z
C Z
C X
A Y
A Y
C Z
A Z
C X
B Z
A Y
C X
B Z
A Y
C X
B Y
C X
C X
C Z
A X
C Y
A Y
B Z
B Y
A X
B Y
A Z
C Z
C X
C X
C X
C Y
B Y
C Z
A Z
C X
C X
C Z
C Z
C X
C Z
B Y
C Z
C X
B Y
A Z
C X
B Y
C Z
C X
B Y
A Z
B X
C Z
B X
B X
C Z
C Z
C X
B Y
A Y
B X
B X
A Y
B Y
B Y
B X
A Z
A Y
C Z
B Y
C Z
A Z
C Z
C X
A Z
C X
C Z
C X
B Y
C X
A Z
B X
C Z
C X
C X
B Y
A Y
C Z
C X
A Y
A X
C Z
B Y
B X
C X
C X
C X
C Z
A Z
B Y
A Y
B Y
B X
B Y
B Y
A Z
B Y
B Y
B Y
C Z
C X
A Z
A X
B Z
C X
C X
C X
C X
C Z
A Z
B Y
A Z
B Y
C X
A Z
A Y
C Z
C X
B X
A Z
B Y
C Z
A Z
C X
A Z
A Y
B Y
C Z
B Y
C X
A Z
A Z
A X
C Z
C X
A Y
B Y
B X
C Z
A Z
C X
B X
B Y
A Z
C X
B Y
C X
C Z
C Z
B Y
A Z
A Y
C X
B Y
C X
C X
C Z
C Z
C X
A X
C X
A Z
C Z
B X
B X
C X
B X
B Y
C X
C X
A Y
B Y
C Z
C Z
C Z
C Z
C Z
C Z
A Z
B X
C X
B Y
B Y
C X
C Z
A Z
C X
C Z
C Z
C X
A Z
C Z
A Z
C Z
A Y
C X
C X
B Y
C X
C Z
B X
A Y
C Z
C X
B Y
B X
A Y
C X
A Z
C Z
C X
C X
A Y
B Y
C Z
B Z
C Z
C X
B Y
C Z
C X
A Y
C X
C Z
C X
C X
B X
C X
B Y
C X
C Z
C X
B X
B X
C Z
A Y
C Z
C Y
B X
A Z
C X
A Z
B Z
A Y
C Z
C Z
A Z
B Z
A Z
C X
C Z
C Z
A Z
A Y
C Z
C X
A Y
B Y
B X
A Z
A Y
C X
B X
A Y
C Z
B Y
C X
C X
C X
B X
A Z
B Y
B Y
A Z
C X
B X
B X
A Y
C Z
C X
C X
A Y
C X
C X
C Z
C X
A Y
B Y
C Z
A Z
C Z
A Z
A Z
A Y
C X
C X
C X
A Y
A Y
B Y
B Z
A Z
C X
C Z
C X
C Z
B X
C X
C X
B X
C Z
C X
B Y
B X
C Z
A Z
C Z
B Y
C Z
C Z
B X
A Y
B Y
A Z
B Y
C X
C X
A Z
C Z
C X
C Z
C X
A Z
C X
A Z
C X
A Y
A Z
C X
C Z
B Y
C Z
A Z
C Y
B Z
B Y
A Z
C Z
A X
A Z
C Z
C X
C X
A Y
C Z
C X
C Z
C Z
C Z
B Y
C Z
C X
C Z
B Y
C Z
B Y
C Z
C Z
C Z
C Z
C Z
B Y
C Z
B Y
A Y
C X
B Y
A Y
C X
A Z
A Y
C Z
B Y
C Z
C X
A Y
B Y
C X
C X
C X
A Y
A Z
B X
B X
B X
B Y
C Z
B Y
C Z
C Z
B Y
A X
C X
A Y
C Z
B Y
B Y
C Z
C Z
C X
C Z
C Z
B Y
C Z
C X
A Y
A Z
C X
B Z
C X
B Y
C Z
C X
A Y
A Z
C Z
C X
C Z
C X
C X
C X
C X
C Z
C X
B Y
A Y
C X
C Z
A Z
B Y
C Z
C X
C Z
B Y
A Z
A Y
A Y
B Y
B Y
A Z
B X
A Y
C X
C X
A Y
C X
A Y
B Y
C Z
A X
B X
A Y
A Z
C Z
B X
C Z
B Y
C X
B Y
C Z
A Z
A Y
C X
C Z
B X
B Y
C Z
C Z
A Z
C Z
B Z
C X
C X
C Z
C Z
C Z
C X
C X
C Z
B Y
C Z
B Z
C X
A Y
C Z
B Y
C X
A Y
C Z
B X
C Z
A Z
C Z
C X
A Y
A Y
A Y
C Z
C Z
A Y
A X
C Z
C Z
C X
C Z
A Z
A Z
C Z
C X
C Z
B Y
A Y
B Z
B Y
C X
C Z
C X
B X
B Y
C X
C X
C X
A Z
A Y
C X
C Z
C X
B Y
C Z
B X
C Z
B Y
A Z
C X
B Y
C X
B X
A Z
C X
B Y
A Y
C Z
C X
A Y
C X
B Y
B X
C Z
C X
C X
C Z
C X
C X
A Y
A X
C Z
C Z
C Z
B Y
C Z
A Z
B X
C Z
C X
C X
A Y
A Z
B Y
B Y
C Z
C Z
A Y
A Z
A Z
C Z
B Y
B Y
C Z
B Y
C X
C X
C Z
A Z
C X
C X
B Y
B Y
C Z
B Y
C Z
C Z
C Z
C Z
C X
C Z
B Y
C Z
C Z
B X
C Z
C Z
C X
B Y
C Z
A Z
A Z
A Z
C X
B Y
C Z
A Y
B X
C X
C X
A X
A Y
B X
C Z
C X
C Z
C Z
B Y
C Z
C Z
B Z
C Z
C Z
B X
A Y
C X
A Z
B Y
A Z
C X
B X
B X
C Z
A X
B Z
A Z
B Y
C X
C Z
B Z
C X
B X
C Z
A Z
B X
C Z
C Z
A Z
A Y
C Z
C Z
B X
A Z
C Z
B Y
B Y
C Z
B Y
C Z
C Z
C Z
C Z
C Z
C Z
C Z
C X
A Y
C Z
C Z
C X
C Z
B Y
B X
B Y
A Z
C Z
B Y
B X
C Z
B X
C Y
C X
B Y
C Z
B Y
A Z
B Y
C X
C Z
B X
C Z
A Y
C Z
B X
A Z
A Y
B Y
C Z
A Y
B Y
C X
A Z
A Y
C Z
C Z
A Y
B X
C X
B Y
A Y
C X
B X
C X
C Z
C Z
B Y
A Z
B Y
A Z
A Y
A Z
B X
A Y
C X
B Y
C Z
C Z
A Z
C Z
C Z
C X
C Z
C Z
B Y
A Z
C X
A Y
C Z
A X
A Z
C Z
B Y
C X
C Y
A Y
B X
B Y
C Z
C Z
B X
B X
C Y
B Y
B X
C X
C Z
A Z
C Z
A Z
C Z
C Z
A Z
B X
C Z
C X
C Z
B Y
B X
A Z
C Z
B X
C Z
B Z
C Z
B Y
B Y
C Z
B Y
A Y
A Z
A Z
C X
A X
C X
C Z
C Z
A Y
C Z
C Z
C Z
A Y
B X
C Z
C X
B X
C X
C X
B Y
C Z
B X
C X
B Y
A Y
C Z
C X
C X
A Z
B Y
C Z
B Y
C Z
B Z
B Y
B Y
A Y
B Y
B Y
A X
A Y
C Z
C X
B X
C Z
C X
C X
B Y
C Z
C Z
B Y
A Y
B Y
C Z
C X
C Z
C Z
C X
A Y
A Y
C Z
A Y
C X
C Z
A Z
A Z
C Z
B Y
A X
A X
B X
A Z
C X
C X
C X
C X
A Z
A Z
C X
B X
B Y
C X
B Y
B Z
A Z
A Y
C X
B Y
B Y
C Z
B X
B X
C Z
B Y
C Z
C Z
B Y
C Z
C X
C Z
B Y
C X
C Z
C Z
C X
B X
C Z
C X
C X
C Y
C Z
B Y
C X
C X
A Y
C X
C X
C Z
C X
C Z
C Z
C Z
A X
C Z
C Y
C Z
C Z
C Z
C Z
A X
C Z
B X
C Z
C X
B Y
C X
A Z
C Z
C X
B Y
B Y
A Z
A Y
C X
A Z
C Z
C Z
A Y
A Z
A X
C Z
A Z
C Z
C Z
C Z
A Z
A Y
A Z
A Z
A Y
A Y
C X
A Y
A Y
C Z
C Z
C Z
B X
C X
C Z
B X
C Z
C Z
C Z
C Z
C Z
B Y
C Z
B Y
C Z
C X
A Z
C Z
B X
B Y
C X
B Y
C X
C X
A Y
C Z
C X
C X
C Z
C X
C X
C Z
B Y
B X
C X
B X
B Y
C X
A Z
B Y
A Z
B Y
A Z
A Y
C Z
C Z
C X
B Y
A Y
A Y
C X
B Y
C X
A Z
A Z
C X
A X
C X
A Z
C X
C Z
C X
A Y
C X
B Y
B Y
C X
A Z
C Z
C Z
B X
C Z
C Z
A Y
C Z
B Y
A Z
A X
C Z
C X
B Y
A Z
C X
B X
A Z
A Z
C Z
A Z
C Z
C Z
A X
C X
A Z
C X
A Y
B Y
C Z
B Y
B X
C Z
A X
B Z
A Z
A Z
C Z
A Z
C Z
A Z
C X
C X
C X
C X
A Z
C Z
C X
B Y
A Z
B Y
A Y
C Z
A Z
C X
C Z
B Y
C X
A Y
B X
A Y
B X
B Y
C Z
A Y
B Y
A Y
B Y
C Z
C X
C X
C X
C Z
B Y
C Z
B X
C X
A Y
A X
B Y
A Z
C Z
A Y
A Z
C X
B Y
A Z
C Z
C X
C Y
C X
A Z
A Y
C X
A Y
C X
C X
A Z
B Y
C Z
C X
B X
B Y
A Z
A Z
B X
B Y
C X
B Y
C Z
B Y
C Y
B Y
B X
B Y
A Y
B Y
C Z
B X
B Y
C Z
A Z
C Z
B X
A Y
B X
C Z
B Y
A Y
C Z
C Z
C Y
C Z
A Y
C X
A Y
C Z
C Z
C Z
C Z
C Z
C X
C Z
C Z
B Y
C X
C Z
B X
C X
C Z
C X
A Z
C X
C X
C Z
C X
C X
C Z
A Z
B X
B Y
C Z
A Z
C X
B X
B Y
C Z
C Z
A Y
C X
C Z
C X
C Z
B Y
C X
C Z
C X
C X
C Z
C X
B X
C X
C Z
A Y
A Y
A Y
C Z
C Z
B X
C X
A Z
C Z
C X
C Z
B X
C Z
B Z
C X
A Y
C Z
A Y
C X
B Y
B Y
A Z
C Z
C Z
C Z
A Z
C X
A Y
C Z
A Y
C Z
A Z
A Z
B Y
C Z
A Z
C X
A Y
C Z
C Z
C X
C X
C X
A X
B Z
C Z
C X
A Y
A Z
C Z
B X
B Y
C X
C Z
B X
B Y
C X
B X
C Z
C X
C X
C X
C X
A Y
A Z
A Y
B Y
C Z
B Y
B Y
C Z
A X
C Z
B X
C Z
C Z
A Z
B Y
C Z
C Z
A Y
A Z
A Z
A Z
B X
C X
C X
B Y
C Z
C X
B Y
A Y
C X
C Z
C Z
C X
C Y
A Y
A Z
C X
C X
A Z
B X
C Z
A X
C Z
C X
C Z
A X
A Z
C X
B Y
C Z
C Z
B X
A Y
B Y
C Z
C Z
A Z
A Y
C Z
C Z
A X
B Y
C Z
C Z
B Y
C X
C Z
B X
B Y
A Z
C Z
C X
C X
C Z
B Z
B Y
C Z
C X
A Y
C X
A Y
A Z
B Y
B X
C Z
A Z
C Z
C Z
C Z
A Y
B Y
A Z
B Y
C Z
C X
B Y
C Z
A Y
C Z
A Z
C Z
C Z
C Z
A Z
C X
B Y
C Z
A Z
C Z
C Z
A Z
C Z
C X
B Z
C Z
C Z
A Z
C Z
C Z
B Y
B X
C Z
C Z
B Y
A Y
C Z
A Z
A Z
C Z
C X
C X
B X
C X
A Y
B X
A Y
C Z
C X
B Y
C Z
C X
C X
C X
B X
B Z
C Z
B Y
C X
A Z
C Z
C Z
A Z
A Z
C Z
C Z
A Z
A Z
A Z
C Z
A Z
C Y
A Z
C Z
C Z
C X
C X
C Z
C Z
A Z
C Z
A Z
C X
C X
C X
A Y
A Z
A Z
A Y
B X
C Z
C Z
B X
C Z
C X
B Y
C Z
C X
C X
B Y
B Y
A Y
A Z
B X
C X
B Y
B Y
B Y
C Z
C X
C X
A Y
B Z
A Z
A Z
B X
C X
A Y
C X
C Z
C X
A Y
A Z
C Z
A Z
C Z
C X
C X
A Z
B X
B X
B Y
C Z
C Z
C X
C X
C X
B Y
C Z
C X
B X
C Z
C X
B X
A Y
B Y
C Z
A Z
A Y
C Z
A Y
A Y
C Z
B Y
C Z
B Z
C Z
A Z
C X
C X
C Z
B X
C X
B Y
C Z
B X
C Z
C X
B X
B Y
B Z
B X
A Y
C X
C Z
C Z
A Y
B X
A Y
C X
C Z
B Y
C Z
C Z
C Z
A Z
A Z
A Y
C Z
B Y
C Z
C X
B Y
C Z
C Z
A X
C X
B Y
A Z
C Z
C X
A Z
A Y
C Z
C Z
B X
C Z
A Z
A Y
C X
A Y
C Z
C X
C X
C X
B Y
C X
A Y
C X
B Y
B X
A Y
B X
A Y
B Z
C Z
A Z
B Y
B X
C Z
C Z
C X
B Y
A Z
A Z
A Y
A Y
C Z
A Z
A Z
B Y
C X
C Z
C Z
C Z
A Y
A Z`;

const sample = sampleData.split(`\n`);
const A = 1;
const Y = 1;
const B = 2;
const X = 2;
const C = 2;
const Z = 2;

const scoreCalc = function (data) {
  const gameArray = [];
  const games = data.split(`\n`);
  let gameScore = 0;
  games.forEach((g) => {
    gameArray.push(g.split(` `));
  });

  gameArray.forEach((game) => {
    //console.log(game);

    let playScore = { letter: ``, score: 0 };
    if (game[1] === `X`) {
      playScore.score = 1;
      playScore.letter = `A`;
    } else if (game[1] === `Y`) {
      playScore.score = 2;
      playScore.letter = `B`;
    } else {
      playScore.score = 3;
      playScore.letter = `C`;
    }
    //console.log(playScore);

    gameScore += playScore.score;
    //console.log(gameScore);

    if (game[0] === playScore.letter) {
      gameScore += 3;
    } else if (
      (game[0] === `A` && playScore.letter === `B`) ||
      (game[0] === `B` && playScore.letter === `C`) ||
      (game[0] === `C` && playScore.letter === `A`)
    ) {
      gameScore += 6;
    }
  });
  return gameScore;
};

// A = X = Rock
// B = Y = Paper
// C = Z = Scissor

// A Y win
// B Z Win
// C X Win

console.log(scoreCalc(gameData));

const newScoreCalc = function (data) {
  const gameArray = [];
  const games = data.split(`\n`);
  let gameScore = 0;
  games.forEach((g) => {
    gameArray.push(g.split(` `));
  });
};
