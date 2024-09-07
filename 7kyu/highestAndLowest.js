// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// * All numbers are valid Int32, no need to validate them.
// * There will always be at least one number in the input string.
// * Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
const arr = numbers.split(' ');
  const newArr = arr.filter(el => el !== ' ');
  let max = Number.NEGATIVE_INFINITY;
  let min = Infinity;
  for (const i of newArr) {
    const el = parseInt(i);
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
  }
  return `${max} ${min}`;
}
