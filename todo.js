document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display existing tasks
    tasks.forEach(task => {
        addTaskToDOM(task);
    });

    addTaskBtn.addEventListener('click', function() {
        const taskContent = taskInput.value.trim();
        if (taskContent !== '') {
            addTask(taskContent);
            taskInput.value = ''; 
        }
    });

    function addTask(taskContent) {
        const task = { content: taskContent, completed: false };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        addTaskToDOM(task);
    }

    function addTaskToDOM(task) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span>${task.content}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);


        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });

        // Add event listener to the checkbox to mark task as completed
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            task.completed = !task.completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            if (task.completed) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
    }
});
