function editTask(id) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  const taskToUpdate = tasks.find((task) => task.id === id);

  if (taskToUpdate) {
    const newName = prompt("Enter new task name:", taskToUpdate.name);
    const newPriority = prompt("Enter new task priority:", taskToUpdate.priority);

    if (newName !== null && newPriority !== null) {
      taskToUpdate.name = newName;
      taskToUpdate.priority = newPriority;

      localStorage.setItem("tasks", JSON.stringify(tasks));

      renderTasks();
    } else {
      alert("Invalid input. Task not updated.");
    }
  } else {
    alert("Task not found.");
  }
}
