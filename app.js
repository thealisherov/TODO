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
    <input type="checkbox" class="done"  onclick="done(event)">
    <div class="taskTEXT"><p>${taskName}</p></div>
  </div>
  <div class="TaskIcons">
    <span class="edit" onclick="edit(event)">
      <img class="editIcon" src="/pen.png" alt="">
    </span>
    <span class="delete" onclick="deleted(event)">
      <img class="deleteIcon" src="/delete.png" alt="">
    </span>
  </div>
`;
  document.querySelector(".addedTasks").appendChild(newTask);
  input.value = "";
}

// const edit = (event) => {
//   const taskDiv = event.target.closest('task');
//   const p =taskDiv.querySelector('#taskTEXT p');
//   const newText = prompt("Enter new task",p.textContent);
//   if (newText !==null&&newText.trim()=="") {
//     p.textContent=newText.trim();
//   }
// };

const edit = (event) => {
  // .task ni topish   kodni shu qismida AI dan foydalandim
  let el = event.target;
  while (el && !el.classList.contains("task")) {
    el = el.parentElement;
  }
  if (!el) return; // .task topilmasa, chiqib ketadi

  const p = el.querySelector(".taskTEXT p");
  if (!p) return; // <p> topilmasa, chiqib ketadi

  const newText = prompt("Yangi matn kiriting:", p.textContent);
  if (newText !== null && newText.trim() !== "") {
    p.textContent = newText.trim();
  }
  console.log("its working");
};

const deleted = (event) => {
  const taskDiv = event.target.closest(".task");
  taskDiv.remove();
};

const done = (event) => {
  const bajarildi = event.target.closest(".task");
  const text = bajarildi.querySelector(".taskTEXT p");
  if (!text) return;
  console.log("working");

  if (event.target.checked) {
    text.classList.add("doneTask");
  } else {
    text.classList.remove("doneTask");
  }
};

window.ADDtask = ADDtask;
window.deleted = deleted;
window.edit = edit;
window.done = done;
