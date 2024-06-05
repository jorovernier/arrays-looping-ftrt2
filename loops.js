/// Slide Examples

const perfectTemp = 125;
let teaTemp = 130;

while (teaTemp > perfectTemp) {
  // add a chip of ice
  teaTemp -= 1;
  console.log('Tea temperature is now', teaTemp);
}

// Example of `break` statement
const students = ['Alice', 'Bob', 'Charlie', 'Diana'];

let i = 0; // i stands for index
while (i < students.length) {
  console.log(students[i]);

  if (students[i] === 'Bob') {
    console.log('Hi Bob!');
    break; // we found Bob, no need to loop any further!
  }
  i += 1;
}

// Count by 2: 0, 2, 4, 6, 8

// Iterator Skip method from slides
for (let n = 0; n < 10; n += 2) {
  console.log(n);
}

// Modulo method
for(let n = 0; n <= 10; n++){
  if(n % 2 === 0){
    console.log(n)
  }
}
// Modulo returns the remainder of the divisiono equation
// console.log(10%5) => 0
// console.log(28%9) => 1


// Looping through an array to check a condition
let word = 'berries and cream'

let splitWord = word.split(' ')
for(let i = 0; i < splitWord.length; i++){
  if(splitWord[i].startsWith('c')){
    splitWord[i] = splitWord[i].toUpperCase()
  }
}
console.log(splitWord.join(' '))