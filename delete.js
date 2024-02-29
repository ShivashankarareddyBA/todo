
function deleteTask(id) {
  
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    
    
    const indexToDelete = tasks.findIndex(task => task.id === id);
    
    if (indexToDelete !== -1) {
        alert("Are you sure you want Delete")
       
        tasks.splice(indexToDelete, 1);
        
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
       
        renderTasks();
        
    } else {
        alert("Task not found.");
    }
}
