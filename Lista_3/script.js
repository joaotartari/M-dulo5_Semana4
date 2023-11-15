// Step 1
function Esconder() {
  const foto = document.getElementById('foto');
  const botão = document.getElementById('Esconder/Mostrar');
  const imagem = document.getElementById('imagem');
  if (foto.style.visibility == 'hidden') {
    foto.style.visibility = 'visible';
    botão.innerHTML = 'Ocultar';
    imagem.style.height = '300px';
  } else {
    foto.style.visibility = 'hidden';
    botão.innerHTML = 'Mostrar';
    imagem.style.height = '1px';
  }
}
// step 2
function alteraText() {
  const div = document.getElementById('sobre');
  const input1 = document.getElementById('input1');
  div.style.textAlign = input1.value;
}
// step 3
function alteraCor() {
  const cabecalho = document.getElementById('header');
  const rodape = document.getElementById('footer');
  const input2 = document.getElementById('input2');
  if (input2.value == 'black') {
    cabecalho.style.backgroundColor = input2.value;
    rodape.style.backgroundColor = input2.value;
    cabecalho.style.color = 'white';
    rodape.style.color = 'white';
  } else if (input2.value == 'white') {
    cabecalho.style.backgroundColor = input2.value;
    rodape.style.backgroundColor = input2.value;
    cabecalho.style.color = 'black';
    rodape.style.color = 'black';
  } else {
    cabecalho.style.backgroundColor = input2.value;
    rodape.style.backgroundColor = input2.value;
  }
}
//step 4
function alteraFont() {
  const input3 = document.getElementById('input3');
  const divSobre = document.getElementById('sobre');
  divSobre.style.fontFamily = input3.value;
}
//step 5
function alteraModo(tema) {
  const conteudo = document.getElementById('conteudo');
  if (tema == 'claro') {
    conteudo.style.backgroundColor = 'white';
    conteudo.style.color = 'black';
  } else {
    conteudo.style.backgroundColor = 'black';
    conteudo.style.color = 'white';
  }
}
