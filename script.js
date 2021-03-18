// Global variables
let numberOfSquares;

// How many squares should be displayed
const squaresInWidth = 16;
const squaresInHeight = 16;

// Selectors
const gridWrapper = document.querySelector(".grid-wrapper");


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

function calcSquares(width, height) {
  numberOfSquares = width * height;
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

calcSquares(squaresInWidth, squaresInHeight);
populateContainer(numberOfSquares);
