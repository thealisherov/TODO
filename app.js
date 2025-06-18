const taskarea = document.getElementsByClassName("addedTasks");
const taskName = document.getElementById("ADD");

document.querySelector(".addBtn").addEventListener("click", ADDtask);

function ADDtask() {
  const input = document.getElementById("ADD");
  const taskName = input.value.trim();
  if (!taskName) return;

  let newTask = document.createElement("div");
  newTask.className = "task";
  newTask.innerHTML = `
  <div style="display: flex; align-items: center;">
    <input type="checkbox" class="done">
    <div id="taskTEXT"><p>${taskName}</p></div>
  </div>
  <div class="TaskIcons">
    <span class="edit" onclick="edit()">
      <img class="editIcon" src="/pen.png" alt="">
    </span>
    <span class="delete" onclick="deleted()">
      <img class="deleteIcon" src="/delete.png" alt="">
    </span>
  </div>
`;
  document.querySelector(".addedTasks").appendChild(newTask);
  input.value = "";
}
window.ADDtask = ADDtask;

const edit = () => {};

const deleted = () => {};
