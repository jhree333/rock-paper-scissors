let playerCount = 0;
let computerCount = 0;

const getComputerChoice = () => {
  const choices = ["가위", "바위", "보"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === "가위" && computerSelection === "보") ||
    (playerSelection === "바위" && computerSelection === "가위") ||
    (playerSelection === "보" && computerSelection === "바위")
  ) {
    playerCount += 1;
    return `사용자가 이겼습니다.`;
  } else if (playerSelection === computerSelection) {
    return `비겼습니다.`;
  } else {
    computerCount += 1;
    return `컴퓨터가 이겼습니다.`;
  }
};

const createElement = (text, className, result) => {
  const element = document.createElement("p");
  element.textContent = text;
  element.setAttribute("class", className);
  result.appendChild(element);
};

const createCountElement = (className, count, result) => {
  const element = document.createElement("p");
  element.textContent = `${className} 점수: ${count}`;
  element.setAttribute("class", className);
  result.insertBefore(element, result.firstChild);
};

function createResultElement(playerCount, computerCount, result) {
  if (playerCount < 5 && computerCount < 5) {
    createCountElement("컴퓨터", computerCount, result);
    createCountElement("사용자", playerCount, result);
  } else {
    const roundWinner = document.createElement("div");
    roundWinner.setAttribute("class", "roundWinner");
    createCountElement("컴퓨터", computerCount, result);
    createCountElement("사용자", playerCount, result);
    roundWinner.textContent =
      playerCount > computerCount
        ? "사용자가 최종 승리하였습니다."
        : "컴퓨터가 최종 승리하였습니다.";
    result.insertBefore(roundWinner, result.firstChild);
  }
  return result;
}

const playGame = (userChoice) => {
  const result = document.createElement("div");
  result.setAttribute("class", "result");

  const countDiv = document.querySelectorAll(".result");
  if (countDiv.length > 0) {
    document.body.removeChild(countDiv[0]);
  }

  const playerSelection = userChoice;
  createElement(`사용자: ${playerSelection}`, "user", result);

  const computerSelection = getComputerChoice();
  createElement(`컴퓨터: ${computerSelection}`, "computer", result);

  const winner = playRound(playerSelection, computerSelection);
  createElement(winner, "winner", result);

  const scoreResult = createResultElement(playerCount, computerCount, result);
  document.body.appendChild(scoreResult);

  if (playerCount === 5 || computerCount === 5) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playGame(e.target.textContent);
  });
});
