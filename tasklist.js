window.addEventListener("load", () => {
  renderTasks();
});

function renderTasks() {
  let taskTableBody = document.getElementById("taskTableBody");
  taskTableBody.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.sort((a, b) => a.priority - b.priority);

  tasks.forEach((task) => {
    let taskList = document.createElement("tr");
    taskList.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.priority}</td>
            <td><button onclick="editTask(${task.id})">Edit</button></td>
            <td><button onclick="deleteTask(${task.id})">Delete</button></td>
            <td><button onclick="finishTask(${
              task.id
            })">Finish Task</button></td>
        `;
    taskTableBody.appendChild(taskList);
  });
}

function editTask(id) {
  alert("Edit task with ID: " + id);
}

function deleteTask(id) {
  alert("Delete task with ID: " + id);
}

function finishTask(id) {
  alert("Finish task with ID: " + id);
}
