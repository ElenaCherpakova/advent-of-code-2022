const { readFileSync } = require('fs');

const inputFunc = (txtFile) => {
  const input = readFileSync(`${txtFile}`, 'utf8');
  return input.trimEnd();
};

const sampleInput = inputFunc('day05.txt');
const [rawStacks, rawMoves] = sampleInput
  .split('\n\n')
  .map((item) => item.split('\n'));
const parsedStacks = rawStacks.map((line) =>
  [...line].filter((value, index) => index % 4 === 1),
);
// console.log(parsedStacks)
const indexes = parsedStacks.pop();

const stacks = {};
for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    // console.log('line[i]', line[i]);
    if (line[i] !== ' ') {
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
    }
  }
}

const moves = [];
for (const move of rawMoves) {
  const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  moves.push({
    count: parseInt(match[1]),
    from: parseInt(match[2]),
    to: parseInt(match[3]),
  });
}
// console.log({ moves });

function part1() {
  //making a deep copy of stacks
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    for (let i = 0; i < move.count; i++) {
      const crate = stacks[move.from].pop();
      stacks[move.to].push(crate);
    }
    return indexes
      .map((value) => {
        const stack = localStacks[value];
        return stack[stack.length - 1];
      })
      .join('');
  }
}

function part2() {
  //making a deep copy of stacks
  const localStacks = JSON.parse(JSON.stringify(stacks));
  // console.log({ localStacks });
  for (const move of moves) {
    const crates = localStacks[move.from].splice(-move.count, move.count);
    // console.log({ crates });
    localStacks[move.to] = localStacks[move.to].concat(crates);
    // console.log({ localStacks});
  }
  return indexes
    .map((value) => {
      const stack = localStacks[value];
      return stack[stack.length - 1];
    })
    .join('');
}

// console.log(part1());
console.log(part2());
