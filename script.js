document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        const bubble = document.createElement('span');
        bubble.className = 'bubble';
        bubble.addEventListener('click', () => {
            li.classList.toggle('completed');
            bubble.classList.toggle('completed');
        });

        li.appendChild(bubble);
        li.appendChild(document.createTextNode(taskText));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}