import readlineSync from "readline-sync";

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculated(num1, num2, method) {
  let res;
  switch (method) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    default:
  }
  return res;
}

function getCalcGameData() {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const sings = ["+", "-", "*"];
  const sing = sings[getRandomNum(0, sings.length - 1)];
  const question = `${randomNum1} ${sing} ${randomNum2}`;
  const correctAnswer = calculated(randomNum1, randomNum2, sing).toString();
  return [question, correctAnswer];
}

const countRounds = 3;
const taskDeskription = "What is the result of the expression?";

function startGame2() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!\n${taskDeskription}`);

  for (let i = 0; i < countRounds; i += 1) {
    const gameData = getCalcGameData();
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

export default startGame2;
