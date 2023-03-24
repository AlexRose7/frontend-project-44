import getRandomNum from '../random.js';
import gameStart from '../index.js';

const taskDeskription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num % 2 === 0) {
    return false;
  }
  return num > 1;
}

function getGameData() {
  const randomNum = getRandomNum(1, 9);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
}

const getGame = () => gameStart(taskDeskription, getGameData);

export default getGame;
