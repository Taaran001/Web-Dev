    const inp = document.getElementById('inp');
    const todoList = document.getElementById("todos");
    const box = document.getElementById("box")
    let counter = 0

    function addTodo() {
        const inputEl = document.getElementById("inp");
        const textNode = document.createElement("li");
        const trimed = inputEl.value.trim();
        if (trimed.value == "" || trimed.value == null) {
            return;
        }
        textNode.style.fontSize = "20px"
        textNode.style.marginTop = "10px"
        textNode.style.listStyleType = "none"
        console.log(textNode);


        textNode.innerHTML = `<div class='todolists' id='todo-${counter}'>
    <input type='checkbox' onclick='deleteTodo(${counter})'>
    <h4>${inputEl.value}</h4>
</div>`;

        const parentEl = document.getElementById("list");
        parentEl.appendChild(textNode);
        counter += 1
        inputEl.value = ""
    }


    function deleteTodo(index) {
        const element = document.getElementById("todo-" + index);
        element.parentNode.removeChild(element);
    }

