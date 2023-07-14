let playerCount = 0;
let computerCount = 0;

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "가위";
  } else if (randomNum == 1) {
    return "바위";
  } else {
    return "보";
  }
};

const playRound = (playerSelection, computerSelection) => {
  const resultTemplate = `사용자: ${playerSelection} \n컴퓨터: ${computerSelection} \n`;
  if (
    (playerSelection === "가위" && computerSelection === "보") ||
    (playerSelection === "바위" && computerSelection === "가위") ||
    (playerSelection === "보" && computerSelection === "바위")
  ) {
    playerCount += 1;
    return `${resultTemplate}사용자가 이겼습니다.`;
  } else if (playerSelection === computerSelection) {
    return `${resultTemplate}비겼습니다.`;
  } else {
    computerCount += 1;
    return `${resultTemplate}컴퓨터가 이겼습니다.`;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    // prettier-ignore
    const playerSelection = prompt("가위바위보를 입력하세요.")
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    alert(result);
  }
  const countTemplate = `사용자 점수:${playerCount} \n컴퓨터 점수:${computerCount} \n`;
  if (playerCount > computerCount) {
    alert(`${countTemplate}승자: 사용자`);
  } else if (playerCount === computerCount) {
    alert(`${countTemplate}무승부`);
  } else {
    alert(`${countTemplate}승자: 컴퓨터`);
  }
};

game();
