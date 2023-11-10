function adicionarTarefa() {
    var novaTarefa = document.getElementById("tarefa").value;

    var novoItemLista = document.createElement("li");

    novoItemLista.innerHTML = novaTarefa;

    document.getElementById("tarefas").appendChild(novoItemLista);

    document.getElementById("tarefa").value = "";
}