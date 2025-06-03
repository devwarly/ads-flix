function pesquisar() {
    const input_text = document.getElementsByClassName("search-input")[0].value;

    alert(input_text);
}



const iconeFavorito = document.getElementById('favorito');
const divFav = document.getElementById('div_fav');
const textoStatus = document.getElementById('textoStatus');

divFav.addEventListener('click', () => {
  if (iconeFavorito.classList.contains('bi-star')) {
    iconeFavorito.classList.remove('bi-star');
    iconeFavorito.classList.add('bi-star-fill');
    textoStatus.textContent = 'Favorito';
  } else {
    iconeFavorito.classList.remove('bi-star-fill');
    iconeFavorito.classList.add('bi-star');
    textoStatus.textContent = 'Favoritar';
  }
});

