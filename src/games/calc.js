import getRandomNum from '../random.js';
import gameStart from '../index.js';

const taskDeskription = 'What is the result of the expression?';

function calculated(num1, num2, method) {
  let res;
  switch (method) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    default:
  }
  return res;
}

function getGameData() {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const sings = ['+', '-', '*'];
  const sing = sings[getRandomNum(0, sings.length - 1)];
  const question = `${randomNum1} ${sing} ${randomNum2}`;
  const correctAnswer = calculated(randomNum1, randomNum2, sing).toString();
  return [question, correctAnswer];
}

const getGame = () => gameStart(taskDeskription, getGameData);

export default getGame;
