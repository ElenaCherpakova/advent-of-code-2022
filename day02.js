const fetchInput = async (day) => {
  const response = await fetch(
    `https://adventofcode.com/2022/day/${day}/input`,
  );
  const text = await response.text();
  return text.trim();
};

const sampleInput = await fetchInput(2);
//lookup table for moves that

const moveValues = {
  X: 1,
  Y: 2,
  Z: 3,
};
//lookup table for the game
const gameValues = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

const getTheScore = (game) => {
  const move = game.split(' ');
  const [opponent, ourMove] = move;
  const relevantGameValue = gameValues[opponent];
  const gameScore = relevantGameValue[ourMove];
  const moveScore = moveValues[ourMove];
  return gameScore + moveScore;
};

const games = sampleInput.split('\n');
const scores = games.map((game) => getTheScore(game));
const totalScore = scores.reduce((acc, num) => acc + num, 0);

// Part 2

// X is lose
// Y is draw
// Z is win

const actualMovesValue = {
  A: { X: 3, Y: 1, Z: 2 },
  B: { X: 1, Y: 2, Z: 3 },
  C: { X: 2, Y: 3, Z: 1 },
};

const actualGamesValue = { X: 0, Y: 3, Z: 6 };

const getActualScore = (game) => {
  const move = game.split(' ');
  const [opponent, gameOutCome] = move;
  //get the game score
  const gameScore = actualGamesValue[gameOutCome];
  // get move score
  const moveScore = actualMovesValue[opponent][gameOutCome];
  //add them together
  return gameScore + moveScore;
};

const actualScores = games.map(getActualScore);
const totalActualScore = actualScores.reduce((acc, num) => acc + num, 0);

console.log(totalActualScore)