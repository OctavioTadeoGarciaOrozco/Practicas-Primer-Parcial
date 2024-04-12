
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");


window.onload = function() {
    loadTasks();
};


function addTask() {
    if (taskInput.value === "") {
        alert("Por favor, ingresa una tarea");
        return;
    }

    var taskText = taskInput.value;
    var taskItem = document.createElement("li");
    var taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    taskTextSpan.contentEditable = true; 

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
        taskItem.remove();
        saveTasks();
    };

    var completeButton = document.createElement("button");
    completeButton.textContent = "Completar";
    completeButton.onclick = function() {
        taskItem.classList.toggle("task-complete");
        saveTasks();
    };

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);

    saveTasks();
    taskInput.value = "";
}


taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function filterTasks(status) {
    var tasks = taskList.getElementsByTagName("li");
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        if (status === "all" || (status === "active" && !task.classList.contains("task-complete")) || (status === "completed" && task.classList.contains("task-complete"))) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    }
}


function saveTasks() {
    var tasks = [];
    var taskItems = taskList.getElementsByTagName("li");
    for (var i = 0; i < taskItems.length; i++) {
        var taskText = taskItems[i].querySelector("span").textContent;
        var isCompleted = taskItems[i].classList.contains("task-complete");
        tasks.push({ text: taskText, completed: isCompleted });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        var tasks = JSON.parse(savedTasks);
        tasks.forEach(function(task) {
            var taskItem = document.createElement("li");
            var taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = task.text;
            taskTextSpan.contentEditable = true; 

            if (task.completed) {
                taskItem.classList.add("task-complete");
            }

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.onclick = function() {
                taskItem.remove();
                saveTasks();
            };

            var completeButton = document.createElement("button");
            completeButton.textContent = "Completar";
            completeButton.onclick = function() {
                taskItem.classList.toggle("task-complete");
                saveTasks();
            };

            taskItem.appendChild(taskTextSpan);
            taskItem.appendChild(deleteButton);
            taskItem.appendChild(completeButton);
            taskList.appendChild(taskItem);
        });
    }
}
