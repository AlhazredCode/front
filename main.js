// Importaciones
import './style.css';
import createHeader from './scripts/componets/header.js';
import createFooter from './scripts/componets/footer.js';
import section1 from './scripts/componets/section1.js';
import section2 from './scripts/componets/section2.js';
import section3 from './scripts/componets/section3.js';
import section4 from './scripts/componets/section4.js';
import { backgroundFX, videoBackground } from './scripts/wallpaper.js';
import floatingButton from './scripts/componets/floatingButton.js';


// Llamadas a las funciones
document.getElementById('app').innerHTML = `
  ${createHeader()}
  ${section1()}
  ${section3()}
  ${section2()}
  ${await section4()}
  ${createFooter()}
  ${floatingButton()}
  `;
  videoBackground();
  backgroundFX();
