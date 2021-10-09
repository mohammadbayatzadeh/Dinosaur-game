let box = document.querySelector(".box");
let dinasor = document.querySelector(".dinasor");
let enemy = document.querySelector(".enemy");
let text = document.querySelector(".text");
let score = 0;
text.innerHTML = "your score is : 0";


box.addEventListener("click", () => {
  if (dinasor.classList == "animation") {
    return;
  }
  dinasor.classList.add("animation");
  setTimeout(function () {
    dinasor.classList.remove("animation");
  }, 2000);
});

setInterval(function () {
  let dinasortop = parseInt(
    window.getComputedStyle(dinasor).getPropertyValue("top")
  );
  let enemyleft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );
  console.log(dinasortop, enemyleft);
  if (enemyleft > 100 && enemyleft < 160 && dinasortop > 255) {
    enemy.style.animation = "none";

    alert(`game over  score :  ${Math.floor(score / 100)}`);
    score = 0;
    enemy.style.animation = "move 3s linear infinite";
  } else {
    score++;
    text.innerHTML = "score :" + Math.floor(score / 100);
  }
}, 1);
