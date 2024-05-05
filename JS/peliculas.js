const peliculas = [
  {
    id: 1,
    image: "../ASSETS/images/Peliculas/el_secreto_de_sus_ojos.jpg",
    titulo: "El secreto de sus ojos",
    descripcion: "comedia de una pelicula argentina",
    link:  "https://www.youtube.com/watch?v=SOW5EfrTTsE&ab_channel=cinenacional"

  },
  {
    id: 2,
    image: "../ASSETS/images/Peliculas/Un_lugar_en_el_mundo.jpg",
    titulo: "Un Lugar en el mundo",
    descripcion: "comedia de una pelicula argentina",
    link: "https://www.youtube.com/watch?v=d0eDO3lusC0&ab_channel=decine21"
  },
  {
    id: 3,
    image: "../ASSETS/images/Peliculas/9reinas.jpg",
    titulo: "Nueve reinas",
    descripcion: "comedia de una pelicula argentina",
    link: "https://www.youtube.com/watch?v=I42JYVjQkPI&ab_channel=StarDistributionLatinoam%C3%A9rica"
  },
  {
    id: 4,
    image: "../ASSETS/images/Peliculas/La_historia_oficial-.jpg",
    titulo: "La historia oficial",
    descripcion: "comedia de una pelicula argentina",
    link: "https://www.youtube.com/watch?v=BibM13-Jd8E&ab_channel=Lukanela"
  },
  {
    id: 5,
    image: "../ASSETS/images/Peliculas/El_hijo_de_la_novia.jpg",
    titulo: "El hijo de la novia",
    descripcion: "comedia de una pelicula argentina",
    link: "https://www.youtube.com/watch?v=AoAU_eeSq4o&ab_channel=RescateAudiovisualArgentino"
  },
  {
    id: 6,
    image: "../ASSETS/images/Peliculas/relatos_salvajes.jpg",
    titulo: "Relatos salvajes",
    descripcion: "comedia de una pelicula argentina",
    link:"https://www.youtube.com/watch?v=CzJM3jYKjAg&ab_channel=WarnerBros.PicturesEspa%C3%B1a"
  },
  {
    id: 7,
    image: "../ASSETS/images/Peliculas/Lugares_comunes.jpg",
    titulo: "Lugares comunes",
    descripcion: "comedia de una pelicula argentina",
    link: "https://www.youtube.com/watch?v=xXQJbhcsAyI&ab_channel=cameo"
  },
  {
    id: 8,
    image: "../ASSETS/images/Peliculas/Tiempo_de_revancha.jpg",
    titulo: "Tiempo de revancha",
    descripcion: "comedia de una pelicula argentina",
    link:"https://www.youtube.com/watch?v=f6fIawRcRxs&ab_channel=OdeonVOD"
  },
  {
    id: 9,
  image: "../ASSETS/images/Peliculas/Rosaura_a_las_diez.jpg",
  titulo: "Rosaura a las diez",
  descripcion: "comedia de una pelicula argentina",
  link: "https://www.youtube.com/watch?v=gltR19O0q1Q&ab_channel=ElencoestableGurruchaga"
 },
{
 id: 10,
image: "../ASSETS/images/Peliculas/martin_hache.jpg",
titulo: "Martin (Hache)",
descripcion: "comedia de una pelicula argentina",
link:"https://www.youtube.com/watch?v=cUQIHRV3Vlc&ab_channel=645JorgeVar"
},
];

try {
    const container = document.getElementById("container");
    peliculas.forEach((pelicula) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Crear enlace para el trailer
        const enlaceTrailer = document.createElement("a");
        enlaceTrailer.href = pelicula.link; // Enlace al trailer
        enlaceTrailer.target = "_blank"; // Abrir en una nueva pestaña

        const image = document.createElement("img");
        image.src = pelicula.image;
        image.alt = pelicula.titulo;

        const contenido = document.createElement("div");
        contenido.classList.add("card-content");

        const titulo = document.createElement("h3");
        titulo.textContent = pelicula.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = pelicula.descripcion;

        //contenido.appendChild(titulo);
        //contenido.appendChild(descripcion);

        // Agregar la imagen dentro del enlace
        enlaceTrailer.appendChild(image);
        
        // Agregar el enlace al contenido de la tarjeta
        contenido.appendChild(enlaceTrailer);

        card.appendChild(contenido);

        container.appendChild(card);
    });
} catch (error) {
    console.log(error);
}

