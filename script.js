let lista = document.querySelector('#ul');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
const tarefa = document.querySelector('#tarefa');
const horas = document.querySelector('#hours');
const registrar = document.querySelector('#registrar');
const apagarTudo = document.querySelector('#apagarTudo');
const form = document.querySelector('form');

document.addEventListener('click', function (e) {
  let element = e.target;
  if (element === registrar) {
    addTask();
  }

  if (element === apagarTudo) {
    deleteAll();
  }

  if (element.classList.contains('icon')) {
    element.parentElement.remove();
    saveTasks();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function addTask() {
  let inp = tarefa.value;
  let hr = horas.value;

  if (!inp) {
    alert('Insira uma tarefa');
  } else if (!hr) {
    alert('Insira um horário');
  } else {
    regist(`${inp} - ${hr}`);
    saveTasks();
  }
}

function regist(input) {
  lista.innerHTML += `<li>${input}<img class="icon" src="./imagens/delete.svg"></li>`;
  cleanInputs();
}

function deleteAll() {
  localStorage.clear();
  tarefas = [];
  lista.innerHTML = '';
}

function cleanInputs() {
  tarefa.value = '';
  tarefa.focus();
  horas.value = '';
}

function saveTasks() {
  const liTarefas = document.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace(
      '<img class="icon" src="./imagens/delete.svg">',
      ''
    );
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function loadTasks() {
  for (let tarefa of tarefas) {
    regist(tarefa);
  }
}

loadTasks();
