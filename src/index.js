import readlineSync from 'readline-sync';

const countRounds = 3;

function gameStart(taskDeskription, getGameData) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${taskDeskription}`);

  for (let i = 0; i < countRounds; i += 1) {
    const gameData = getGameData();
    const question = gameData[0];
    const rightAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default gameStart;
