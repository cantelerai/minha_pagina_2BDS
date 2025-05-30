let clicks = 0;
let level = 1;
let goal = 10;

const clicksDisplay = document.getElementById("clicks");
const levelDisplay = document.getElementById("level");
const goalDisplay = document.getElementById("goal");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

clickBtn.addEventListener("click", () => {
  clicks++;
  clicksDisplay.textContent = `Cliques: ${clicks}`;

  if (clicks >= goal) {
    level++;
    goal = Math.floor(goal * 1.5);
    levelDisplay.textContent = `Nível: ${level}`;
    goalDisplay.textContent = `Próxima Meta: ${goal} cliques`;
  }
});

resetBtn.addEventListener("click", () => {
  clicks = 0;
  level = 1;
  goal = 10;
  clicksDisplay.textContent = `Cliques: ${clicks}`;
  levelDisplay.textContent = `Nível: ${level}`;
  goalDisplay.textContent = `Próxima Meta: ${goal} cliques`;
});
