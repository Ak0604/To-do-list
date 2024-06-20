// app.js
const taskList = document.getElementById('task-list');

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText === '') return;
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();
    li.appendChild(deleteButton);

    li.onclick = () => li.classList.toggle('completed');

    taskList.appendChild(li);
    taskInput.value = '';
}

