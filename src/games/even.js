import getRandomNum from '../random.js';
import gameStart from '../index.js';

const taskDeskription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function getGameData() {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
}

const getGame = () => gameStart(taskDeskription, getGameData);

export default getGame;
