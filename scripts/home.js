document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typing-text");
  const text = "Get Started.";
  let i = 0;
  let forward = true;
  const typeSpeed = 100;
  const pause = 1000;

  function typeLoop() {
    if (forward) {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeLoop, typeSpeed);
      } else {
        forward = false;
        setTimeout(typeLoop, pause);
      }
    } else {
      if (i > 0) {
        el.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(typeLoop, typeSpeed);
      } else {
        forward = true;
        setTimeout(typeLoop, pause);
      }
    }
  }

  typeLoop();
});
