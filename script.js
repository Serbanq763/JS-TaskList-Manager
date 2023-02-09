const submitButton = document.getElementById("btnSubmit");
const clearButton = document.getElementById("btnClear");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const greetingMessage = "No tasks awaiting yet!";

submitButton.addEventListener("click", addTask);
tasks.addEventListener("click", taskCompleted);
clearButton.addEventListener("click", clearList);

displayMessage(greetingMessage);



function clearList() {
  const taskList = tasks.getElementsByClassName("list-group-item");
  while (taskList.length > 0) {
    taskList[0].parentNode.removeChild(taskList[0]);
  }
  displayMessage(greetingMessage);
}

function taskCompleted(event) {
  const style = event.target.style;
  style.cursor = "pointer";
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

function addTask() {
  const newTask = document.getElementById("newTask");
  if (inputIsValid(newTask.value)) {
    tasks.innerHTML += '<li class="list-group-item">' + newTask.value + "</li>";
    newTask.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    displayMessage("Please enter a task!");
  }
}

function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
}

function inputIsValid(input) {
  if (input) {
    return true;
  }
  return false;
}
