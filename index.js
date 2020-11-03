let currentRow = 0;
let gameStarted = false;
document.querySelector("button").addEventListener("click", stateGame);
let board = document.querySelector("#board");
let display = document.getElementById("display");
let sumToDisplay = 0;
let createRowWithCell = setInterval(createCellinRow, 3000);

function stateGame() {
  if (gameStarted) return;
  else gameStarted = true;

  createBoard();
  createCellinRow();

  createRowWithCell();

  if (currentRow === 6) {
    alert("You Lose");
    clearInterval(createRowWithCell);
    window.reload();
  }
  //console.log(board);
}
function createBoard() {
  //5 row and 6 col in this board
  for (let i = 1; i <= 5; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    board.appendChild(row);
  }

  //console.log(board);
}
function createCellinRow() {
  let row = document.getElementsByClassName("row")[currentRow];

  for (let i = 0; i < 6; i++) {
    let cell = document.createElement("div");
    cell.innerText = Math.floor(Math.random() * 25);
    cell.classList.add("cell");
    cell.addEventListener("click", handleCellClick);
    row.appendChild(cell);
  }
  currentRow++;
  createDisplay();
}
function createDisplay() {
  sumToDisplay += Math.floor(Math.random() * 100);
  display.innerText = sumToDisplay;
}

function handleCellClick() {
  if (this.style.backgroundColor === "red")
    //once clicked can't click anymore
    return;

  //console.log(this.innerText);
  this.style.backgroundColor = "red";
  sumToDisplay -= this.innerText;
  display.innerText = sumToDisplay;

  if (sumToDisplay === 0) {
    alert("You Won");
    clearInterval(createRowWithCell);
    window.reload();
  }
}
