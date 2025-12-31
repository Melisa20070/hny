document.addEventListener('DOMContentLoaded', () => {
    const bulbs = document.querySelectorAll('.bulb');
    
    bulbs.forEach((bulb, index) => {
      // Случайное смещение по времени для эффекта «волны»
      const delay = Math.random() * 2; // от 0 до 2 секунд
      bulb.style.animationDelay = `-${delay}s`;
    });
  });
  
const button = document.getElementById('goToPage2');


// Добавляем обработчик клика
button.addEventListener('click', function() {
  // Переходим на page2.html
  window.location.href = 'page2.html';
});

function playMusic() {
  const audio = document.getElementById('bgMusic');
  audio.play().catch(e => {
    console.log('Воспроизведение заблокировано:', e);
  });
}

