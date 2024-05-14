//juan esteban grajales mesa 
// Miguel Angel CHilito Herrera
function inicio() {
  
}
const buttons = document.querySelectorAll("button");
let currentPlayer = "X";
const board = ["", "", "", "", "", "", "", "", ""];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonId = parseInt(button.id.slice(-1)) - 1;
    
    if (board[buttonId] === "") {
      board[buttonId] = currentPlayer;
      button.textContent = currentPlayer;
      button.disabled = true;
      
      if (checkWin(currentPlayer)) {
        Swal.fire({
          title: `¡${currentPlayer} gana!`,
          width: 400,
          padding: '3rem',
          color: '#716add'
        });
        disableAllButtons();
      } else if (checkDraw()) {
        Swal.fire({
          title: "¡Empate!",
          width: 400,
          padding: '3rem',
          color: '#716add'
        });
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWin(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]             
  ];

  return winPatterns.some(pattern => {
    return pattern.every(index => board[index] === player);
  });
}

function checkDraw() {
  return board.every(cell => cell !== "");
}

function disableAllButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}
