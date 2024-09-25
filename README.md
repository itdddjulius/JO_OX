## Naughts and Crosses


## HTML5, CSS3 + JavaScript


## Engine derives BEST MOVE based upon WEIGHTS assigned to Squares

'''
Initialize the board with blank squares
const board = ref(['.', '.', '.', '.', '.', '.', '.', '.', '.'])
const player = 'X'
const computer = 'O'
const winner = ref('')

// Define the weights for each box
const weights = [100, 9, 90, 7, 200, 10, 70, 6, 80]

// Define win lines
const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Check for winner
const checkWinner = () => {
  for (let line of winLines) {
    const [a, b, c] = line
    if (board.value[a] !== '.' && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
      winner.value = board.value[a]
      return true
    }
  }
  return false
}
'''


