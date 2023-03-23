import gameStart from "../index.js";
import getRandomNum from "../random.js";

const taskDeskription = "Find the greatest common divisor of given numbers.";

function getGsd(num1, num2) {
  if (!num2) {
    return num1;
  }
  return getGsd(num2, num1 % num2);
}

function getGameData() {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGsd(randomNum1, randomNum2);
  return [question, correctAnswer];
}

const getGame = () => gameStart(taskDeskription, getGameData);

export default getGame;
