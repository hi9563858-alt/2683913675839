const bar = document.getElementById("bar");
const statusText = document.getElementById("status");
const boot = document.getElementById("boot");
const menu = document.getElementById("menu");
const canvas = document.getElementById("game");

let progress = 0;

const messages = [
  "Checking system...",
  "Loading engine...",
  "Preparing graphics...",
  "Finalizing...",
  "Ready."
];

function updateLoader() {
  progress += Math.random() * 8 + 4; // fast loading

  if (progress > 100) progress = 100;

  bar.style.width = progress + "%";

  let msgIndex = Math.floor(progress / 20);
  statusText.innerText = messages[msgIndex] || "Ready";

  if (progress < 100) {
    requestAnimationFrame(updateLoader);
  } else {
    setTimeout(showMenu, 200);
  }
}

function showMenu() {
  boot.style.display = "none";
  menu.classList.remove("hidden");
}

updateLoader();

function startGame() {
  menu.style.display = "none";
  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let t = 0;

  function loop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // fast pseudo-3D effect
    for (let i = 0; i < 120; i++) {
      ctx.fillStyle = `rgb(0, ${200 - i}, 0)`;
      ctx.fillRect(
        canvas.width / 2 + Math.sin(i + t) * 120,
        i * 5,
        25,
        5
      );
    }

    t += 0.08;
    requestAnimationFrame(loop);
  }

  loop();
}

function fullscreen() {
  document.documentElement.requestFullscreen();
}
