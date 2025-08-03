const inp = document.getElementById('inp');
    const todoList = document.getElementById("todos");
    const box = document.getElementById("box")
    let counter = 0

    function addTodo() {
        const inputEl = document.getElementById("inp");
        const trimed = inputEl.value.trim();
        if (trimed === "" || trimed === undefined) {
            return;
        }

        const textNode = document.createElement("li");
        textNode.style.fontSize = "20px"
        textNode.style.marginTop = "10px"
        textNode.style.listStyleType = "none"
        // console.log(textNode);


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
        element.parentNode.parentNode.removeChild(element.parentNode);

        // element.parentNode.removeChild(element);
        // console.log(element);

    }
