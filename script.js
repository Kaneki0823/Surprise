// Handle "Begin" button
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('bg-music').play();
});

// Fade in each line when in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.line').forEach(line => {
  observer.observe(line);
});
