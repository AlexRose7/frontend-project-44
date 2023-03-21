import readlineSync from "readline-sync";

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEven = (num) => num % 2 === 0;

function getGameData() {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? "yes" : "no";
  return [randomNum, correctAnswer];
}

const countRounds = 3;
const taskDeskription =
  'Answer "yes" if the number is even, otherwise answer "no".';

function startGame() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!\n${taskDeskription}`);

  for (let i = 0; i < countRounds; i += 1) {
    const gameData = getGameData();
    const question = gameData[0];
    const rightAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (rightAnswer === answer) {
      console.log("Correct!");
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
}

export default startGame;
