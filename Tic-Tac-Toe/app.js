let boxes = document.querySelectorAll(".box");
let reserBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let winMsg = document.querySelector("#msg");
let turnO = true;

// WINNING PATTERNS ARRAY

let winningpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// RESET GAME FUNCTION

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// WINNER DISPLAYING FUNCTION

const showWinner = (winner) => {
  winMsg.innerText = `The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
// GAME PLAYING FUNCTION

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === "true") {
      box.textContent = "O";
      turnO = "false";
    } else {
      box.textContent = "X";
      turnO = "true";
    }
    box.disabled = true;
    checkWinner();
  });
});

// FOR DISABLING/ENABLING  BOXES

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.textContent = "";
  }
};
// WINNER CHECKING FUNCTION

const checkWinner = () => {
  for (let pattern of winningpatterns) {
    let posVal1 = boxes[pattern[0]].textContent;
    let posVal2 = boxes[pattern[1]].textContent;
    let posVal3 = boxes[pattern[2]].textContent;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
      }
    }
  }
};

// EVENT LISTENERS FOR RESET/NEW-GAME

reserBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
