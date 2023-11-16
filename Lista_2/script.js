// Aqui serão adicionados seus script

// step 1
const noticiaPrincipal = document.getElementById('noticia-principal');
alert(noticiaPrincipal.innerHTML);

// step 2
const h1 = document.getElementsByTagName('h1');
for (let i = 0; i < h1.length; i++) {
  h1[i].style.color = 'red';
  h1[i].style.fontWeight = 'bold';
}

// step 3
const listaP = document.getElementsByClassName('paragrafo-noticia');

for (let i = 0; i < listaP.length; i++) {
  listaP[i].innerHTML = 'Leia a notícia completa';
}

// step 4
const comentarios = document.getElementById('secao-comentarios');
const p = document.createElement('p');
p.innerHTML = 'Deixe seu comentário';
comentarios.appendChild(p);

// step 5
const atualizacoes = document.getElementById('ultimas-atualizacoes');
const filhosAtualizacoes = atualizacoes.children;
atualizacoes.removeChild(filhosAtualizacoes[filhosAtualizacoes.length - 1]);

//Desafio Extra
const alterar = document.getElementById('alternar-tema');
alterar.addEventListener('click', () => {
  document.body.classList.toggle('temaEscuro');
});
