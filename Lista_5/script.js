// Aqui serão adicionados seus scripts
//step 1
const botao = document.getElementById('btnClick');
botao.onclick = function () {
  alert('Parabéns, você encontrou o testouro!');
};

//step 2
const input = document.getElementById('inputText');
input.onchange = function () {
  input.style.color = 'skyblue';
};

//step 3
input.oninput = function () {
  input.style.fontWeight = 'bold';
  input.style.color = 'darkred';
};

//step 4
input.onkeydown = function () {
  document.getElementById('outputMessage').innerHTML = 'Teclado pressionado';
};

input.onkeypress = function () {
  document.getElementById('outputMessage').innerHTML =
    'Teclado sendo pressionado';
};

input.onkeyup = function () {
  document.getElementById('outputMessage').innerHTML =
    'Teclado foi despressionado';
};

//step 5
const box = document.getElementById('box');
box.onmouseover = function () {
  box.style.backgroundColor = 'darkblue';
};

box.onmouseout = function () {
  box.style.backgroundColor = '#00c8a8';
};

//step 6
box.ondragstart = function (event) {
  event.dataTransfer.setData('text/plain', 'the text was dragged');
};
box.ondragover = function (event) {
  event.preventDefault();
};
box.ondrop = function (event) {
  event.preventDefault();
  box.innerHTML = event.dataTransfer.getData('text/plain');
  box.style.fontWeight = 'bold';
  box.style.color = 'darkgreen';
};

//step 7
window.onload = function () {
  alert('The web page was loaded!');
};

//Desafio extra
const botaoDesafio = document.getElementById('btnChallenge');
const count = document.getElementById('count');
let counter = 0;
botaoDesafio.onclick = function () {
  counter++;
  count.innerHTML = counter;
};
setTimeout(function () {
  alert(`Tempo esgotado! Você clicou ${count.innerHTML} vezes.`);
  botaoDesafio.style.backgroundColor = 'blue';
  botaoDesafio.onclick = function () {
    alert('Recarregue a página para jogar novamente');
  };
}, 10000);
