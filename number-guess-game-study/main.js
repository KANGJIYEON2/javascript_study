// 로직 짜기
// 1. 랜덤숫자 나오게 하기(해당 숫자가 콘솔창에 나오게하기)
// 2. 해당 숫자를 맞추게 하는 기회는 단 5번 5번이 지나면 down 뜨게하기
// 3. 정답을 맞췄으면 맞췄습니다! 틀렸으면 틀렸습니다! 뜨게하기
// 4. reset 누르면 처음부터 다시 뜨게 하기
// 5. 1- 100 이내의 숫자만 쓰게하기
// 정답
// let computerNum = 0;
// let playButton = document.getElementById("play-button");
// let userInput = document.getElementById("user-input");
// let resultArea = document.getElementById("result-area");
// let resetBtn = document.getElementById("play-reset");
// let chanceArea = document.getElementById("chance-area");
// let history = [];
// let chances = 5;
// let gameOver = false;

// playButton.addEventListener("click", play); //play() 안됨 함수 바로 실행됨
// resetBtn.addEventListener("click", reset);
// userInput.addEventListener("focus", function () {
//   userInput.value = "";
// });

// function pickRandomNum() {
//   computerNum = Math.floor(Math.random() * 100) + 1;
//   console.log(computerNum);
// }

// function play() {
//   let userValue = userInput.value;

//   if (userValue < 1 || userValue > 100) {
//     resultArea.textContent = "1과 100사이 숫자 입력해라";
//     return;
//   }
//   if (history.includes(userValue)) {
//     resultArea.textContent = "이미 입력한 숫자입니다";
//     return;
//   }
//   chances--;
//   chanceArea.textContent = `남은기회 : ${chances}번`;
//   if (userValue < computerNum) {
//     resultArea.textContent = "UP!!";
//   } else if (userValue > computerNum) {
//     resultArea.textContent = "DOWN!!";
//   } else {
//     resultArea.textContent = "맞췄습니다!";
//     gameOver = true;
//   }

//   history.push(userValue);
//   console.log(history);
//   if (chances < 1) {
//     gameOver = true;
//   }
//   if (gameOver == true) {
//     playButton.disabled = true;
//   }
// }

// function reset() {
//   userInput.value = "";
//   pickRandomNum();
//   resultArea.textContent = "결과값이 여기 나옵니다!";
// }

// pickRandomNum();

let computerNum = 0;
let chances = 5; //
let gameOver = false;
let history = [];
let resetNum = document.getElementById("reset");
let checkNum = document.getElementById("check");
let inputBox = document.getElementById("input-box");
let resultList = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");

checkNum.addEventListener("click", play);
resetNum.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function randomNum() {
  let computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

function play() {
  let userValue = inputBox.value; //input 값을 value로 바꿔줌
  if (userValue < 1 || userValue > 101) {
    resultList.textContent = "1과 100사이 숫자를 입력하시오";
    return; //return 꼭 붙여주기 아니면 안돌아감
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다";
    return;
  }
  chances--;
  chanceArea.textContent = `남은기회 : ${chances} 번`;

  if (userValue < computerNum) {
    resultList.textContent = "UP!!";
  } else if (userValue > computerNum) {
    resultList.textContent = "DOWN!";
  } else {
    resultList.textContent = "정답입니다!";
    gameOver = true;
  }
  history.push(userValue);
  console.log(history);
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  randomNum();
  resultList.textContent = "결과값이 여기 나옵니다!";
}

randomNum();
