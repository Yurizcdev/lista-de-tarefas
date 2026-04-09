function adicionar() {
    let tarefa = document.getElementById("tarefa").value;

    let li = document.createElement("li");
    li.innerText = tarefa;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("lista").appendChild(li);

    document.getElementById("tarefa").value = "";
}
