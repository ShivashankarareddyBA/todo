document.getElementById("submit").addEventListener("click", function() {
    const taskName = document.getElementById("myInput").value;
    const taskPriority = document.getElementById("priority").value;
    if (taskName.trim() !== "" && taskPriority.trim() !== "") {
      
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        let taskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        tasks.push({ id: taskId, name: taskName, priority: taskPriority });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        document.getElementById("myInput").value = "";
        document.getElementById("priority").value = "";
        
        window.location.href = "tasklist.html";
    } else {
        alert("Please enter both task name and priority!");
    }
});
