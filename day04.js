const { readFileSync } = require('fs');

const inputFunc = (txtFile) => {
  const input = readFileSync(`${txtFile}`, 'utf8');
  return input.trim().split('\n');
};

const sampleInput = inputFunc('day04.txt');

const parseInput = (input) => {
  const [range1, range2] = input.split(',');
  const [start1, end1] = range1.split('-');
  const [start2, end2] = range2.split('-');
  return [start1, end1, start2, end2].map((num) => Number(num));
};

const checkIfContains = ([start1, end1, start2, end2]) =>
  (start1 >= start2 && end1 <= end2) || (start1 <= start2 && end1 >= end2);

const coordinates = sampleInput.map((item) => parseInput(item));
const result = coordinates.filter((item) => checkIfContains(item));
console.log(result.length);

// Part 2
const checkIfContains2 = ([start1, end1, start2, end2]) =>
  start1 <= end2 && start2 <= end1;

const result2 = coordinates.filter((item) => checkIfContains2(item));
console.log(result2.length);
