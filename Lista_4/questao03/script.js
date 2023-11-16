function adicionarTarefa() {
  const valor = document.getElementById('tarefa');
  const atividade = document.createElement('li');
  const lista = document.getElementById('listaTarefas');
  const formulario = document.getElementById('tarefaForm');
  atividade.innerHTML = `<p>${valor.value}</p><button onclick="removerTarefa(this)">Remover</button>`;
  lista.appendChild(atividade);
  formulario.reset();
}
function removerTarefa(button) {
  const tarefa = button.parentNode;
  tarefa.remove();
}
