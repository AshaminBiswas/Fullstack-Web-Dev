document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-item");
  const addTask = document.getElementById("add");
  const todoLists = document.getElementById("todos");

  let task = JSON.parse(localStorage.getItem("task")) || [];
  // console.log(addTask);
  task.forEach((element) => {
    renderTask(element);
  });
  addTask.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;
    const newId = {
      id: Date.now(),
      Text: taskText,
      completed: false,
    };
    task.push(newId);
    saveTask();
    renderTask(newId);
    todoInput.value = ""; //clear the value
  });

  function renderTask(taskItem) {
    const li = document.createElement("li");
    li.setAttribute("data-id", taskItem.id);
    if (taskItem.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `<span>${taskItem.Text}</span> 
      <button>Delete</button>
    `;
    todoLists.appendChild(li);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      }

      taskItem.completed = !taskItem.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      task = task.filter((t) => t.id !== taskItem.id); // use taskItem.id
      li.remove();
      saveTask();
    });
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(task));
  }
});
