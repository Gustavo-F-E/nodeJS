import hamburguerMenu from "./hamburguer.js";
import scrollTopButton from "./boton_scroll.js";
import darkThemeConLocalStorage from "./tema_oscuro_con_local_storage.js";


const d = document;
const formulario_login = d.getElementById("formulario_login");
const derivacion_registro = d.getElementById("derivacion-registro");
const loading = d.getElementById("loading");
//const link_derivacion_registro = d.getElementById('link-derivacion-registro');
const formulario_registro = d.getElementById('formulario-registro');
//const submit_formulario_registro = d.getElementById('submit-form-reg');
const nuevo_inicio_sesion = d.getElementById('inicio-sesion-new');
const inicio_sesion = d.getElementById('inicio-sesion');


d.addEventListener("DOMContentLoaded", (e) => {
  formulario_login.classList.remove('noDisplay');
  derivacion_registro.classList.remove('noDisplay');
  loading.classList.add('noDisplay');
  //***********/
  d.addEventListener("click", e => {
    if (e.target.matches('#link-derivacion-registro')) {
      formulario_registro.classList.remove('noDisplay');
      formulario_login.classList.add('noDisplay');
      derivacion_registro.classList.add('noDisplay');
      e.preventDefault();
    }
    //***********/
    if (e.target.matches('#submit-form-reg')) {
      formulario_registro.classList.add('noDisplay');
      nuevo_inicio_sesion.classList.remove('noDisplay');
      e.preventDefault();
    }
    //***********/
    if (e.target.matches('#boton_iniciar_sesion')) {
      inicio_sesion.classList.remove('noDisplay');
      formulario_login.classList.add('noDisplay');
      derivacion_registro.classList.add('noDisplay');
      e.preventDefault();
    }
    //***********/
    if (e.target.matches('#avatar1') || e.target.matches('#avatar2') || e.target.matches('#avatar3') || e.target.matches('#avatar4') || e.target.matches('#avatar5') || e.target.matches('#avatar6') || e.target.matches('#avatar1-new')) {
      console.log("elegi una pelicula");
      window.location.href = "../pages/peliculas.html";
      e.preventDefault();
    }
    if (e.target.matches('#avatar1')) {
      console.log("chanfle");
      window.location.href = "../pages/peliculas.html";
      e.preventDefault();
    }

    const avatarIds = ["#avatar1", "#avatar2", "#avatar3", "#avatar4", "#avatar5", "#avatar6", "#avatar1-new"];
    if (avatarIds.includes(e.target.id)) {
      console.log("soy muy capo");
      e.preventDefault();
      window.location.href = "../pages/peliculas.html";
    }
  });
  
  /*
  setTimeout(() => {
    formulario_login.classList.remove('noDisplay');
    derivacion_registro.classList.remove('noDisplay');
    loading.classList.add('noDisplay');
  }, 2000);*/
});

