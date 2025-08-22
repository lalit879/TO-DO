document.addEventListener("DOMContentLoaded", () =>{
    const inputText = document.getElementById('todo-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) =>{renderTask(task)})

    addTaskButton.addEventListener('click',() =>{
    const taskText = inputText.value.trim();
    if(taskText==="") return;
    const newtask = {
        id: Date.now(),
        text: taskText,
        completed : true
    }

    tasks.push(newtask)
    saveTasks()
    inputText.value='';
    console.log(tasks);
    
})
   function renderTask(task){
        console.log(task.text);
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id)
        li.innerHTML = `<span>${task.text}</span>
        <button>delete<button>`

        li.addEventListener('click', (e) => {
            if(e.target.tagName ==="BUTTON") return;
            task.completed = ! task.completed;
            li.classList.toggle("completed");
            saveTasks();
        })
        

        todoList.appendChild(li)
    }
    
    function saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})