function loadToDo() {
    btn.classList.add('hidden');
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => addToDo(data))
}

function addToDo(items) {
    let itemsList = document.getElementById("taskList");
    for (let i=0; i<20; i++) {
        let x = document.createElement("li");
        x.innerHTML = items[i].title;
        x.setAttribute('data-id', items[i].id);
        if (items[i].completed) {
            x.style.backgroundColor = "#4cb365";
        } 
        itemsList.appendChild(x);
    }
}
    