// A coin is flipped three times and lands heads or tails. The three results are used to determine a line as being either:

// 3 tails          ----x----  Yin (Moving Line*)
// 2 tails 1 heads  ---------  Yang
// 1 tails 2 heads  ---- ----  Yin 
// 3 heads          ----o----  Yang (Moving Line*)

// *See bottom of description if curious.
// This process is repeated six times to determine each line of the hexagram. The results of these operations are then stored in a 2D Array like so:

// [['two','h','h','t'],['six','t','h','t'],['four','t','t','t'],
// ['one','h','t','h'],['three','h','h','h'],['five','t','t','h']]
// In each array the first index will always be the number of the line ('one' is the bottom line, and 'six' the top), 
// and the other three values will be the results of the coin flips that belong to that line as heads ('h') and tails ('t').

// Write a function that will take a 2D Array like the above as argument and return its hexagram as a string. 
// Each line of the hexagram should begin on a new line.

// oracle([['two','h','h','t'],['six','t','h','t'],['four','t','t','t'], 
// ['one','h','t','h'],['three','h','h','h'],['five','t','t','h']]);
// should return:

// ---------
// ---------
// ----x----
// ----o----
// ---- ----
// ---- ----


function oracle(arr) {

const map = {
    tr: '----x----',
    tw: '---------',
    on: '---- ----',
    ze: '----o----',
  };
  
  const obj = {};
  
  arr.forEach((el) => {
    const [number, ...rest] = el;
    const tails = rest.filter((r) => r === 't')
    if (tails.length === 3) obj[number] = map.tr;
    if (tails.length === 2) obj[number] = map.tw;
    if (tails.length === 1) obj[number] = map.on;
    if (tails.length === 0) obj[number] = map.ze;
  });
  
  console.log(obj);  
  return `${obj.six}\n${obj.five}\n${obj.four}\n${obj.three}\n${obj.two}\n${obj.one}`;
}
