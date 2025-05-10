app.jsfunction generatePalette() {
  const palette = document.getElementById('palette');
  palette.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const color = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.title = color;

    colorBox.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard! 🎯`);
    });

    palette.appendChild(colorBox);
  }
}

// Generate first palette on load
window.onload = generatePalette;
