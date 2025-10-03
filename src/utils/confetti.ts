export function createConfetti() {
  const colors = ['#FFB6C1', '#FFC0CB', '#FFD700', '#FF69B4', '#FFA07A'];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

export function createFireworks() {
  const container = document.createElement('div');
  container.className = 'fireworks-container';
  document.body.appendChild(container);

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = Math.random() * 80 + 10 + '%';
      firework.style.top = Math.random() * 50 + 20 + '%';
      container.appendChild(firework);

      setTimeout(() => firework.remove(), 1000);
    }, i * 300);
  }

  setTimeout(() => container.remove(), 2500);
}
