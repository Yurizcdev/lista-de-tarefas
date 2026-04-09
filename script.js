function adicionar() {
    let tarefa = document.getElementById("tarefa").value;

    let li = document.createElement("li");
    li.innerText = tarefa;

    document.getElementById("lista").appendChild(li);

    document.getElementById("tarefa").value = "";
}
