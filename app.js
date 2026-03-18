let gameseq = [];
let userseq = [];
let started = false;

let btns = ["red", "yellow", "green", "purple"];

let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 1000);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randidx = Math.floor(Math.random() * 4);
  let randcolor = btns[randidx];
  let randbtn = document.querySelector(`.${randcolor}`);
  //console.log(randbtn);
  //console.log(randidx);
  //console.log(randcolor);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameFlash(randbtn);
}
function checkAns(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score is <b>${level - 1}</b><br>Press any key to restart`;

    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userseq.push(userColor);

  checkAns(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
