document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn" onclick="deleteTask(this)">X</button>
            `;
            todoList.appendChild(taskItem);
            taskInput.value = '';

            setTimeout(() => {
                taskItem.style.animation = 'slideIn 0.5s ease';
            }, 10);
        }
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

function deleteTask(btn) {
    const taskItem = btn.parentElement;
    taskItem.style.animation = 'slideOut 0.1s ease';
    setTimeout(() => {
        taskItem.remove();
    }, 500);
}