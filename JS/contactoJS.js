const d = document;
const formulario_login = d.getElementById("formulario_login");
const loading = d.getElementById("loading");
const inputFile = document.getElementById('captura_problema');
const noFilesSelectedLabel = document.querySelector('.no-files-selected');

d.addEventListener("DOMContentLoaded", (e) => {
  formulario_login.classList.remove('noDisplay');
  loading.classList.add('noDisplay');
  //***********/ 
});




inputFile.addEventListener('change', () => {
  if (inputFile.files.length > 0) {
    noFilesSelectedLabel.style.display = 'none';
  } else {
    noFilesSelectedLabel.style.display = 'block';
  }
});

