"use strict";

// console.log(document.querySelector(".message"));
// document.querySelector(".message").textContent = "🎉 Correct Answer..";
// console.log(document.querySelector(".message"));
// console.log(document.querySelector('.guess').textContent);
// document.querySelector('.guess').value = 21;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let highScore = 0;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "You Won";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highScore").textContent = highScore;
    document.querySelector("body").style.backgroundColor = "#FFAAEE";
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too High";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    score--;
    document.querySelector(".message").textContent = "Too low";
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing..";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
});
