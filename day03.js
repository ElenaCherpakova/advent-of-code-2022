const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;


const rucksacks = sampleInput.split('\n');

const findCommonItems = (rucksacks) => {
  const halfIndex = rucksacks.length / 2;
  const [firstHalf, secondHalf] = [
    rucksacks.slice(0, halfIndex),
    rucksacks.slice(halfIndex),
  ];
  const firstHalfSet = new Set(firstHalf);
  const commonItem = [...secondHalf].find((item) => firstHalfSet.has(item));
  return commonItem;
};

const letterToNumber = (letter) =>
  letter.charCodeAt() - (/[a-z]/.test(letter) ? 96 : 38);
const sum = rucksacks
  .map((item) => findCommonItems(item))
  .map((item) => letterToNumber(item))
  .reduce((a, b) => a + b, 0);

console.log(sum);

// Part 2

const getGroupOf3 = (arr) =>
  arr.length ? [arr.slice(0, 3), ...getGroupOf3(arr.slice(3))] : [];

const findCommonItemInGroup3 = ([sack1, sack2, sack3]) => {
  const [set1, set2, set3] = [new Set(sack1), new Set(sack2), new Set(sack3)];
  const commonItem = [...set3].find((item) => set1.has(item) && set2.has(item));
  return commonItem;
};
//convert to common letter To Numbers and sum them up
const sumTotal = getGroupOf3(rucksacks)
  .map((item) => findCommonItemInGroup3(item))
  .map((item) => letterToNumber(item))
  .reduce((acc, num) => acc + num, 0);

console.log(sumTotal);
