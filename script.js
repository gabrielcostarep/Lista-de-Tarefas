// Verificar se ja existe algo no localstorage, se nao determina um array vazio
var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Toda vez que a pagina for recarregada, essa funcao sera chamada
onload = function () {
    if (tarefas == null) {
        let lista = document.getElementById("ul");
        lista.style.display = "none";
    } else {

        // Funcao para registrar as tarefas
        function regist() {
            let lista = document.getElementById("ul");
            let conteudo = "";

            tarefas.forEach((elemento_array) => {
                conteudo += '<li style="list-style-type: none;">' + elemento_array + '</li>';

                // Uma outra maneira de ter o mesmo resultado:
                // conteudo += `<li style="list-style-type: none;">${elemento_array}</li>`;

            });
            lista.innerHTML = conteudo;
        }
        regist();
    }
}

// Funcao para adicionar uma nova tarefa
function addTask() {
    let inp = document.getElementById("tarefa").value;
    let hr = document.getElementById("hours").value;

    if (inp === "") {
        alert("Insira uma tarefa")
    } else if (hr === "") {
        alert("Insira um horário")
    } else {

        // Salvando os dados coletados
        tarefas.push(inp + " - " + hr);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        location.reload();
    }
}

// Funcao para apagar todas as tarefas
function apagarTudo() {
    localStorage.clear();
    location.reload();
}