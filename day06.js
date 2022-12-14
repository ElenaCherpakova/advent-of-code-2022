const { readFileSync } = require('fs');

const inputFunc = (txtFile) => {
  const input = readFileSync(`${txtFile}`, 'utf8');
  return input.trim();
};
const lines = inputFunc('day06.txt');
// console.log({ lines });

function uniqueElement(array) {
  const uniqueArray = new Set(array);
  return uniqueArray.size === array.length;
}

let number = 4;
function part1() {
  let slideWindow = [];
console.log(number)
  for (let i = 0; i < lines.length; i++) {
    slideWindow.push(lines[i]);
    if (slideWindow.length > number) {
      slideWindow.shift();
    }
    if (slideWindow.length === number && uniqueElement(slideWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

function part2() {
  number = 14
  let slideWindow = [];
  console.log(number)
  for (let i = 0; i < lines.length; i++) {
    slideWindow.push(lines[i]);
    if (slideWindow.length > number) {
      slideWindow.shift();
    }
    if (slideWindow.length === number && uniqueElement(slideWindow)) {
      console.log(i + 1);
      break;
    }
  }
}

part1();
part2();
