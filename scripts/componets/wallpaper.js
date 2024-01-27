// scripts/components/background.js

export function backgroundFX() {
  let noiseCounter = 0;
  const applyNoise = () => {
    noiseCounter++;
    const noiseValue = Math.random() * 20 - 10; // Ajusta el rango según tus preferencias
    document.body.style.backgroundPosition = `${noiseCounter}px ${noiseValue}px`;
    requestAnimationFrame(applyNoise);
  };

  applyNoise();
}

export function videoBackground() {
  document.body.innerHTML += `
    <div class='video-background'> 
      <video autoplay loop muted>
        <source src="./Assets/videoBackground.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  `;

  document.body.classList.add('noise');
}
