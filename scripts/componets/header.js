// scripts/components/header.js

const createHeader = () => `
    <header class="header-main">
    <nav class="header-container">
    
    <!-- Image in the navbar -->
    <img src="./assets/header-logo.svg" alt="Logo" class="header-logo">
    <img src="../assets/header-logo.svg" alt="Logo" class="header-logo">
    <img src=".../assets/header-logo.svg" alt="Logo" class="header-logo">
    

    <!-- List of text links in the navbar -->
    <ul class="nav-elements">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <div id="headerBtn" class="header-btn"> <span class="material-icons">
    menu
    </span></div>
    </nav>
    </header>
    <div id="responsiveMenu" class="responsive-menu"> 
    <ul class="mobile-menu work-sans-bold">
    <li id="menuCloseBtn"><span class="material-icons">cancel</span></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
   
    </div>
`;

// btn logic

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
  
    const headerBtn = document.getElementById('headerBtn');
    headerBtn.addEventListener('click', function() {
      document.getElementById('responsiveMenu').classList.toggle('active');
    });

    const closeBtn = document.getElementById('menuCloseBtn');
    menuCloseBtn.addEventListener('click', function() {
      document.getElementById('responsiveMenu').classList.toggle('active');
    });




  });

// Export the createHeader template
export default createHeader;
  