const taskList = document.getElementById('taskList');
const totalTasks = 13;

// Load tasks from localStorage
const savedTasks = JSON.parse(localStorage.getItem('plannerTasks')) || [];

function saveTasksToStorage() {
  localStorage.setItem('plannerTasks', JSON.stringify(savedTasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  for (let i = 0; i < totalTasks; i++) {
    const taskItem = document.createElement('li');
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Task...';
    input.value = savedTasks[i]?.text || '';
    if (savedTasks[i]?.completed) input.classList.add('completed');

    const star = document.createElement('span');
    star.innerHTML = '★';
    star.className = 'star';
    star.onclick = () => {
      savedTasks[i] = {
        ...savedTasks[i],
        completed: !savedTasks[i]?.completed,
        text: input.value
      };
      saveTasksToStorage();
      renderTasks();
    };

    input.addEventListener('change', () => {
      savedTasks[i] = {
        ...savedTasks[i],
        text: input.value,
        completed: savedTasks[i]?.completed || false
      };
      saveTasksToStorage();
    });

    taskItem.appendChild(input);
    taskItem.appendChild(star);
    taskList.appendChild(taskItem);
  }
}

renderTasks();
