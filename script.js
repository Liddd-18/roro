// Fungsi untuk tombol pesan
function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }
  let images = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"];
let index = 0;

function nextSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slideImage").src = images[index];
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slideImage").src = images[index];
}

  
  // Pemutar lagu
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let isPlaying = false;
  
  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseButton.innerHTML = '&#9654;'; // Play icon
    } else {
      audioPlayer.play();
      playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    }
    isPlaying = !isPlaying;
  });
  
  // Placeholder untuk tombol next/prev
  prevButton.addEventListener('click', () => {
    alert('Previous song not implemented.');
  });
  
  nextButton.addEventListener('click', () => {
    alert('Next song not implemented.');
  });
  document.getElementById("fireworkButton").addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      createFirework();
    }
  });
  
  document.getElementById("fireworkButton").addEventListener("click", function() {
    const container = document.getElementById("fireworkContainer");

    for (let i = 0; i < 15; i++) { // Menambah jumlah api agar lebih banyak
        let flame = document.createElement("div");
        flame.classList.add("flame");

        let randomX = Math.random() * window.innerWidth * 0.8; 
        let randomSize = Math.random() * 40 + 20; // Membuat api lebih bervariasi

        flame.style.left = `${randomX}px`;
        flame.style.width = `${randomSize}px`;
        flame.style.height = `${randomSize * 1.5}px`;

        container.appendChild(flame);

        setTimeout(() => {
            flame.remove();
        }, 7000); // Hapus setelah 7 detik
    }
});

