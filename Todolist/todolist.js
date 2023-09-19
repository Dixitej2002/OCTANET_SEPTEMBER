// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete">Complete</button>
        <button class="delete">Delete</button>
    `;

    // Add task to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Attach event listeners for delete and complete buttons
    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    const completeButton = li.querySelector(".complete");
    completeButton.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        completeButton.style.display = "none";
    });
}

// Event listener for adding a new task
addTaskButton.addEventListener("click", addTask);

// Event listener for Enter key press
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
