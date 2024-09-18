const taskInput = document.getElementById('taskInput');
const categoryInput = document.getElementById('categoryInput');
const priorityInput = document.getElementById('priorityInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearTasksBtn = document.getElementById('clearTasksBtn');

document.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click', addTask);

clearTasksBtn.addEventListener('click', clearTasks);

// Carregar tarefas do LocalStorage
function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => createTaskElement(task));
}

// Adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    const category = categoryInput.value;
    const priority = priorityInput.value;

    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const task = { text: taskText, category, priority };

    createTaskElement(task);
    saveTaskToLocalStorage(task);
    taskInput.value = '';
}

// Criar o elemento HTML da tarefa
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `list-group-item d-flex justify-content-between align-items-center fade-enter`;

    li.innerHTML = `
        <span>
            <strong>${task.text}</strong> 
            <em>[${task.category} - Prioridade: ${task.priority}]</em>
        </span>
    `;

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm ms-2';
    editBtn.textContent = 'Editar';
    editBtn.onclick = function () {
        editTask(li, task);
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm ms-2';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.onclick = function () {
        removeTask(li);
    };

    const btnContainer = document.createElement('div');
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(btnContainer);

    taskList.appendChild(li);

    setTimeout(() => {
        li.classList.add('fade-enter-active');
    }, 10);
}

// Editar tarefa
function editTask(taskElement, task) {
    const newTaskText = prompt('Edite a tarefa:', task.text);
    const newCategory = prompt('Edite a categoria:', task.category);
    const newPriority = prompt('Edite a prioridade (Baixa, Média, Alta):', task.priority);

    if (newTaskText === null || newCategory === null || newPriority === null) {
        return;
    }

    const updatedTask = {
        text: newTaskText.trim(),
        category: newCategory.trim(),
        priority: newPriority.trim(),
    };

    taskElement.innerHTML = `
        <span>
            <strong>${updatedTask.text}</strong> 
            <em>[${updatedTask.category} - Prioridade: ${updatedTask.priority}]</em>
        </span>
    `;

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm ms-2';
    editBtn.textContent = 'Editar';
    editBtn.onclick = function () {
        editTask(taskElement, updatedTask);
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm ms-2';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.onclick = function () {
        removeTask(taskElement);
    };

    const btnContainer = document.createElement('div');
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    taskElement.appendChild(btnContainer);

    updateTaskInLocalStorage(task, updatedTask);
}

// Remover tarefa
function removeTask(taskElement) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        taskElement.classList.add('fade-exit-active');
        setTimeout(() => {
            taskElement.remove();
            removeTaskFromLocalStorage(taskElement.firstChild.textContent);
        }, 300);
    }
}

// Limpar todas as tarefas
function clearTasks() {
    if (confirm('Tem certeza que deseja limpar todas as tarefas?')) {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    }
}

// Salvar tarefa no LocalStorage
function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// atualizar tarefa no LocalStorage
function updateTaskInLocalStorage(oldTask, newTask) {
    let tasks = getTasksFromLocalStorage();
    const index = tasks.findIndex(t => t.text === oldTask.text);
    if (index !== -1) {
        tasks[index] = newTask;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remover tarefa do LocalStorage
function removeTaskFromLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter((task) => task.text !== taskText.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Obter as tarefas do LocalStorage
function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}
