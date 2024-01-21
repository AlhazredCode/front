import './style.css'
import createHeader from './scripts/componets/header.js'
import createFooter from './scripts/componets/footer.js'
import section1 from './scripts/componets/section1.js'
import section2 from './scripts/componets/section2.js'
import section3 from './scripts/componets/section3.js'
import section4 from './scripts/componets/section4.js'



document.getElementById('app').innerHTML = `
${createHeader()}
${section1()}
${section2()}
${section3()}
${section4()}
${createFooter()}

`;
