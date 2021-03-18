// Global variables

// How many squares should be displayed
const gridWidth = 16;
const gridHeight = 16;

// Selectors
const gridWrapper = document.querySelector(".grid-wrapper");

// Functions

function createSquare(squareContainer) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute(
    "style",
    "border: 1px solid black; height: 30px; width: 30px"
  );
  squareContainer.appendChild(square);
}



createSquare(gridWrapper);