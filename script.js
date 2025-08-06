// Modal logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const carousel = document.getElementById('carousel');

  // Only run if carousel exists on this page
  if (carousel) {
    const items = carousel.querySelectorAll('img');
    const itemCount = items.length;
    const angle = 360 / itemCount;
    const radius = 350;

    // Apply 3D rotation layout
   items.forEach((item, i) => {
  const rotation = angle * i;
  item.style.transform = `
    rotateY(${rotation}deg) 
    translateZ(${radius}px)
    translateX(-50%)`;
      // Click to open fullscreen modal
      item.addEventListener('click', () => {
        if (modal && modalImg) {
          modal.classList.add('open');
          modalImg.src = item.src;
        }
      });
    });
  }

  // Close modal on click
  if (modal) {
    modal.addEventListener('click', () => {
      modal.classList.remove('open');
      if (modalImg) {
        modalImg.src = '';
      }
    });
  }
  const music = document.getElementById('bg-music');
  if (music) {
    // Try to play as soon as page loads
    setTimeout(() => {
      music.play().catch(err => {
        console.log("Autoplay may be blocked until user interaction.");
      });
    }, 300);
  }
});
