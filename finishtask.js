function finishTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let finishedTask = tasks.find(task => task.id === id);

   
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    
    let finishedTaskTableBody = document.getElementById("finishedTaskTableBody");
    let finishedTaskRow = document.createElement("tr");
    finishedTaskRow.innerHTML = `
        <td>${finishedTask.id}</td>
        <td>${finishedTask.name}</td>
        <td>${finishedTask.priority}</td>
    `;
    finishedTaskTableBody.appendChild(finishedTaskRow);
    window.location.href = "finishtask.html";

}
