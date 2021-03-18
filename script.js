// Global variables
let numberOfSquares;
let squaresInSide = 16;
let squareSize = 560 / squaresInSide;

// Selectors
const bodyWrapper = document.querySelector(".body-wrapper");
const gridWrapper = document.querySelector(".grid-wrapper");

// Event listeners
const reset = document.querySelector(".reset-btn");
reset.addEventListener("click", resetGrid);

// Functions

function calcSquareSize(squaresPerLine) {
  squareSize = 560 / squaresPerLine;
  return squareSize;
}

function calcSquares(squares) {
  numberOfSquares = squares * squares;
  calcSquareSize();
  return numberOfSquares;
}

function createContainer(squares) {
  gridWrapper.style.border = "3px solid black";
  gridWrapper.style.height = "560px";
  gridWrapper.style.width = "560px";
  gridWrapper.style.display = "inline-grid";
  gridWrapper.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  gridWrapper.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  bodyWrapper.appendChild(gridWrapper);
}

// Parameter indicates in which container square should be placed
function createSquare(container) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.border = "1px solid black";
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
  square.style.boxSizing = "border-box";
  container.appendChild(square);
}

// Color square on hover
function onHover() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.background = randomColor;
    });
  });
}

function populateContainer(squareNumber) {
  for (let i = 0; i < squareNumber; i++) {
    createSquare(gridWrapper);
  }
  onHover();
}

function resetGrid() {
  let newSize = prompt("How many squares per side new grid should have?");
  if (newSize > 100) {
    alert("More than 100 squares are not allowed");
    return;
  } else if (newSize === null) {
    return;
  }
  gridWrapper.innerHTML = "";
  squaresInSide = newSize;
  calcSquares(squaresInSide);
  createContainer(squaresInSide);
  populateContainer(numberOfSquares);
}

calcSquares(squaresInSide);
createContainer(squaresInSide);
populateContainer(numberOfSquares);
