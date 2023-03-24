import gameStart from '../index.js';
import getRandomNum from '../random.js';

const taskDeskription = 'What number is missing in the progression?';

function getProgression(start, step, lenght) {
  let a = start;
  const b = step;
  let c = lenght;
  const res = [a];
  while ((c -= 1)) {
    res.push((a += b));
  }
  return res;
}

function getGameData() {
  const start = getRandomNum(1, 20);
  const step = getRandomNum(1, 5);
  const lenght = getRandomNum(10, 12);
  const progression = getProgression(start, step, lenght);
  const hiddenNum = getRandomNum(0, progression.length - 1);
  const correctAnswer = progression[hiddenNum].toString();
  progression[hiddenNum] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

const getGame = () => gameStart(taskDeskription, getGameData);

export default getGame;
