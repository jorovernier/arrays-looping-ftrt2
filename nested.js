// Nested Arrays
const grid = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];

// Accessing nested values with an index
console.log(grid[1][1])

// Reassign nested values
grid[0][2] = 'C!!!'
console.log(grid)

// Nested Loops

const word = 'tchaikovsky'
// Check if a word has duplicate letters
for(let i = 0; i < word.length; i++){
  for(let j = i+1; j < word.length; j++){
    if(word[i] === word[j]){
      console.log(`${word[i]} is a duplicate`)
      break;
    }
  }
}

// Tic-Tac-Toe

// Let's play a game!

const tictactoe = [
  [],
  [],
  [],
];

// Visualize the board like this:
// [
//   ['X','O','X'],
//   ['O','X',''],
//   ['X','','O'],
// ]

tictactoe[0].push('X')
tictactoe[0].push('O')
tictactoe[1].push('','X')
tictactoe[2].push('','','O')
tictactoe[2].splice(0, 1, 'X')
tictactoe[1][0] = 'O'
tictactoe[0].push('X')


console.log(tictactoe)
console.log('X wins!')