function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    const priority = Math.floor(Math.random() * 3);
    switch (priority) {
        case 0:
            listItem.classList.add("task-important");
            break;
        case 1:
            listItem.classList.add("task-medium");
            break;
        case 2:
            listItem.classList.add("task-normal");
            break;
    }

    taskList.appendChild(listItem);
    input.value = "";
}