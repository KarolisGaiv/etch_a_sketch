// Global variables
let numberOfSquares;

// How many squares should be displayed
let squaresInSide = 16;

// Selectors
const gridWrapper = document.querySelector(".grid-wrapper");

// Event listeners
const reset = document.querySelector(".reset-btn");
reset.addEventListener("click", resetGrid);

// Functions

// Parameter indicates in which container square should be placed
function createSquare(squareContainer) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute(
    "style",
    "border: 1px solid black; height: 30px; width: 30px"
  );
  squareContainer.appendChild(square);
}

function calcSquares(squares) {
  numberOfSquares = squares * squares;
  return numberOfSquares;
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
  populateContainer(numberOfSquares);
}

calcSquares(squaresInSide);
populateContainer(numberOfSquares);
