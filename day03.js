// const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// `;

const fetchInput = async (day) => {
  const response = await fetch(
    `https://adventofcode.com/2022/day/${day}/input`,
  );
  const text = await response.text();
  return text.trim();
};
const sampleInput = await fetchInput(3);

const format = (input) => {
  return input.trim().split('\n');
};

const letterToNumber = (letter) => {
  if (/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96;
  }
  if (/[A-Z]/.test(letter)) {
    return letter.charCodeAt(0) - 65 + 27;
  }
};

const part1 = () => {
  const inputFormatted = format(sampleInput);
  const res = inputFormatted.map((line) => {
    const part1 = [...line.slice(0, line.length / 2)];
    const part2 = [...line.slice(line.length / 2)];

    let part1Set = new Set(part1);
    const intersection = part2.filter((x) => part1Set.has(x));
    let removeDuplicates = [...new Set(intersection)];

    return letterToNumber(removeDuplicates[0]);
  });
  return res.reduce((a, b) => a + b, 0);
};

console.log(part1(sampleInput));

const part2 = () => {
  let sum = 0;
  const formatted = format(sampleInput);
  for (let i = 0; i < formatted.length; i += 3) {
    const backpacks = [formatted[i], formatted[i + 1], formatted[i + 2]];
    // removing duplicated letters from the first backpack
    let firstUniqueGroup = new Set(backpacks[0]);
    // find same letter in the second backpack
    let intersection = [...backpacks[1]].filter((x) => firstUniqueGroup.has(x));
    // remove duplicates from the intersection
    firstUniqueGroup = new Set(intersection);
    // find same letter in the third backpack
    intersection = [...backpacks[2]].filter((x) => firstUniqueGroup.has(x));
    let removeDuplicates = [...new Set(intersection)];
    sum += letterToNumber(removeDuplicates[0]);
  }
  return sum;
};

console.log(part2(sampleInput));
