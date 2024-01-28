// scripts/components/background.js

export function backgroundFX() {
  // Crear cinco divs para el efecto de ruido
  for (let i = 1; i <= 8; i++) {
    const noiseDiv = document.createElement('div');
    noiseDiv.classList.add('noise'); // Agrega la clase 'noise' a cada div
    document.body.appendChild(noiseDiv);
    
    let noiseCounter = 0;
    const applyNoise = () => {
      noiseCounter++;
      const noiseValue = Math.random() * 1500 - 2000; // Ajusta el rango según tus preferencias
      noiseDiv.style.backgroundPosition = `${noiseCounter}px ${noiseValue}px`;
      requestAnimationFrame(applyNoise);
    };

    applyNoise();
  }
}

// Ejecutar backgroundFX después de que el DOM haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
  backgroundFX();
});


export function videoBackground() {
  document.body.innerHTML += `
    <div class='video-background'> 
      <video autoplay loop muted>
        <source src="./Assets/videoBackground.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  `;

 
}
