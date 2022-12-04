const fetchInput = async () => {
  const response = await fetch('https://adventofcode.com/2022/day/1/input');
  const text = await response.text();
  return text;
};
const sampleInput = await fetchInput();

const getSumOfGroup = (groups) => {
  return (numLines = groups
    .split('\n')
    .reduce((acc, str) => acc + Number(str), 0));
};

const numberGroups = sampleInput.split('\n\n');
const groupSum = numberGroups.map((group) => getSumOfGroup(group));
const maxValue = Math.max(...groupSum);
const sorted = [...groupSum].sort((a, b) => b - a);
const firstThreeSum = sorted.slice(0, 3).reduce((acc, num) => acc + num, 0);
console.log(firstThreeSum);
