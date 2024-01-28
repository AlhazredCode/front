// section4.js

const section4 = async () => {
    // Realiza una petición HTTP para obtener los proyectos desde el archivo JSON
    const response = await fetch('scripts/data.json');
    const projects = await response.json();
  
    let cardsHtml = '';
    for (const project of projects) {
      const tagsHtml = project.tags.map(tag => `<p class="tag">${tag}</p>`).join('');
      cardsHtml += `
        <li class="project-card">
          <img src="${project.images[0]}" alt="${project.title}">
          <h4>${project.title}</h4>
          ${tagsHtml}
        </li>
      `;
    }
  
    return `
      <section class="section-four">
        <div class="container">
          <h3>Projects</h3>
          <ul class="projects-list">
            ${cardsHtml}
          </ul>
          <button class="load-more-btn">Load More Projects</button>
        </div>
      </section>
    `;
  };
  
  export default section4;
  