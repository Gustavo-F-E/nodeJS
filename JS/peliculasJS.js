const d = document;
const loading = d.getElementById("loading");
const background_video = d.getElementById("background-video");
const background_image = d.getElementById("background-image");
const banner = d.getElementById("banner");
const new_banner = d.querySelector(".new_banner");
const container = d.getElementById("container");


d.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    background_image.classList.remove('noDisplay');
    banner.classList.remove('noDisplay');
    new_banner.classList.remove('noDisplay');
    loading.classList.add('noDisplay');
  }, 2000);

  fetch("../JS/peliculas.json")
    .then(response => response.json())
    .then(data => {
      // Obtener los datos del objeto datos_portfolio del JSON
      data.diez_mejores.forEach(e => {
        // Utilizar los datos del objeto en lugar de la lista
        container.innerHTML += `
        <div class="card" id="diez_mejores_${e.id}">
          <div class="card-content">
            <img src="${e.image}" alt="${e.titulo}">
          </div>
        </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
});




