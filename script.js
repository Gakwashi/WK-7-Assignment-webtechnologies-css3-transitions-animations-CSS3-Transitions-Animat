function startBounce() {
  const box = document.getElementById('box');
  box.classList.remove('bounce'); // Reset if already bouncing
  void box.offsetWidth; // Force reflow to restart animation
  box.classList.add('bounce');
}


