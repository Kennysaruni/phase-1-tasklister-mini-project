document.addEventListener("DOMContentLoaded",  () => {
    const form = document.getElementById("create-task-form");
    form.addEventListener("submit", addTask);
  });

   function addTask (e) {
    e.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newToDo = document.createElement("li");
    newToDo.innerText = newTaskDescription.value;
    appendTask(newToDo);
    e.target.reset();
  };
  function appendTask (task){
    document.getElementById("tasks").appendChild(task);
  };

  