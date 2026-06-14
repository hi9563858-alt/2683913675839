const boot = document.getElementById("boot");
const menu = document.getElementById("menu");
const canvas = document.getElementById("game");

setTimeout(() => {
  boot.style.display = "none";
  menu.classList.remove("hidden");
}, 2500);

function startGame() {
  menu.style.display = "none";
  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // SIMPLE DOOM-LIKE DEMO (ray-style moving screen)
  let x = 0;

  function loop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // fake "3D corridor"
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgb(0, ${255 - i * 2}, 0)`;
      ctx.fillRect(
        (canvas.width / 2) + Math.sin(i + x) * 100,
        i * 6,
        20,
        6
      );
    }

    x += 0.05;
    requestAnimationFrame(loop);
  }

  loop();
}

function fullscreen() {
  document.documentElement.requestFullscreen();
}
