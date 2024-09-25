// JavaScript code for JOOX_NUXT_W0003

// Board state represented as an object
const board = {
    B1: ".", B2: ".", B3: ".", 
    B4: ".", B5: ".", B6: ".", 
    B7: ".", B8: ".", B9: "."
};

// Weights for computer strategy
const weights = {
    B1: 100, B2: 9, B3: 90,
    B4: 7, B5: 200, B6: 10,
    B7: 70, B8: 6, B9: 80
};

// Winning combinations
const winLines = [
    ["B1", "B2", "B3"], ["B4", "B5", "B6"], ["B7", "B8", "B9"], // Rows
    ["B1", "B4", "B7"], ["B2", "B5", "B8"], ["B3", "B6", "B9"], // Columns
    ["B1", "B5", "B9"], ["B3", "B5", "B7"] // Diagonals
];

let currentPlayer = "X"; // Player always starts as "X"
let gameOver = false;

// Handle player move
function playerMove(cell) {
    if (board[cell] === "." && !gameOver) {
        board[cell] = currentPlayer;
        document.getElementById(cell).innerText = currentPlayer;
        if (checkWinner("X")) {
            document.getElementById("result").innerText = "User Wins!";
            gameOver = true;
        } else {
            currentPlayer = "O"; // Switch to computer's turn
            computerMove();
        }
    }
}

// Handle computer move
function computerMove() {
    let bestMove = null;
    let bestWeight = -1;
    for (let cell in board) {
        if (board[cell] === ".") {
            if (weights[cell] > bestWeight) {
                bestWeight = weights[cell];
                bestMove = cell;
            }
        }
    }
    if (bestMove) {
        board[bestMove] = "O";
        document.getElementById(bestMove).innerText = "O";
        if (checkWinner("O")) {
            document.getElementById("result").innerText = "Computer Wins!";
            gameOver = true;
        } else if (Object.values(board).every(val => val !== ".")) {
            document.getElementById("result").innerText = "It's a Tie!";
            gameOver = true;
        } else {
            currentPlayer = "X"; // Switch back to player's turn
        }
    }
}

// Check if a player has won
function checkWinner(player) {
    return winLines.some(line => 
        line.every(cell => board[cell] === player)
    );
}

// Reset game state
function resetGame() {
    for (let cell in board) {
        board[cell] = "."; // Set each cell in the board object to "."
        document.getElementById(cell).innerText = "."; // Update the display of each cell to "."
    }
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("result").innerText = ""; // Clear the result message
}
