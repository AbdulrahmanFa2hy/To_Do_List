// Setting Up Variables
let theInbut = document.querySelector(".add-task input"),
  theBtn = document.querySelector(".add-task span"),
  taskContent = document.querySelector(".tasks-content"),
  noTasksMsg = document.querySelector(".tasks-content .no-tasks-message"),
  tasksCount = document.querySelector(".tasks-count span"),
  completedTasks = document.querySelector(".completed-tasks span"),
  deleteButton = document.querySelectorAll(".delete"),
  deleteAll = document.getElementById("delete-all"),
  finishAll = document.getElementById("finish-all"),
  taskBox;

// Foucs on inbut field on load
window.onload = function () {
  theInbut.focus();
};

theBtn.addEventListener("click", function () {
  if (theInbut.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please add the task",
    });
  } else {
    // remove no-tasks-message
    noTasksMsg.style.display = "none";
    // Create Main Span
    let mainSpan = document.createElement("span");
    mainSpan.className = "task-box";
    let text = document.createTextNode(theInbut.value);
    mainSpan.appendChild(text);
    // Create Delete Span
    let deleteSpan = document.createElement("span");
    let deleteText = document.createTextNode("Delete");
    deleteSpan.appendChild(deleteText);
    deleteSpan.className = "delete";
    // Append Delete Span to Main Span
    mainSpan.appendChild(deleteSpan);
    // Appen Main Span to Body [task-content]
    taskContent.appendChild(mainSpan);
    // Empty the input value
    theInbut.value = "";

    // foucs on the inbut
    theInbut.focus();

    finishAll.style.display = "inline-block";
    deleteAll.style.display = "inline-block";
    theTaskBox();
  }
});
// Delete One element by click on delete button
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
  }
  // Add finished Class to task
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
  theTaskBox();
});

finishAll.addEventListener("click", function () {
  taskBox.forEach((element) => {
    element.classList.toggle("finished");
  });
  theInbut.focus();
});

deleteAll.addEventListener("click", function () {
  for (let i = 0; i < taskBox.length; i++) {
    taskBox[i].remove();
    noTasksMsg.style.display = "block";
  }
  theTaskBox();
  theInbut.focus();
});

function theTaskBox() {
  taskBox = document.querySelectorAll(".task-box");
  tasksCount.innerHTML = document.querySelectorAll(".task-box").length;
  completedTasks.innerHTML = document.querySelectorAll(".finished").length;
}
