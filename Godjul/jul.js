class Task {
  constructor(name, status, type) {
    this.name = name;
    this.status = status;
    this.type = type;
  }

  getName() {
    return this.name.toString();
  }

  getType() {
    return this.type.toString();
  }

  getStatus() {
    return this.status;
  }

  getCheckBoxName() {
    return this.name.toString() + this.type.toString();
  }

  changeStatus(checkbox) {
    this.status = !checkbox.checked;
  }
}

/* ===== DOM ELEMENT ===== */

const createBtn = document.getElementById("create");
const popUpBtn = document.getElementById("OpenPopUp");
const switchModeBtn = document.getElementById("switchMode");
const refreshBtn = document.getElementById("refresh");

/* ===== EVENT LISTENERS ===== */

popUpBtn.addEventListener("click", openTaskMenu);
createBtn.addEventListener("click", createTask);
refreshBtn.addEventListener("click", updateHTML);
switchModeBtn.addEventListener("click", switchMode);

/* ===== DATA ===== */

let tasks = [];
let mode = true;

/* ===== FUNCTIONS ===== */

function openTaskMenu() {
  const popup = document.getElementById("popup");
  popup.classList.remove("closed");
  popup.classList.add("open");

  document.querySelector("header").classList.add("blur");
  document.querySelector("main").classList.add("blur");
  document.querySelector("footer").classList.add("blur");

  document.addEventListener("keydown", closeOnEscape);
}

function closeOnEscape(event) {
  if (event.key === "Escape") {
    closeTaskMenu();
    document.removeEventListener("keydown", closeOnEscape);
  }
}

function closeTaskMenu() {
  const popup = document.getElementById("popup");
  popup.classList.remove("open");
  popup.classList.add("closed");

  document.querySelector("header").classList.remove("blur");
  document.querySelector("main").classList.remove("blur");
  document.querySelector("footer").classList.remove("blur");
}

function createTask() {
  const nameInput = document.getElementById("name");
  const typeInput = document.getElementById("taskType");

  if (nameInput.value === "" || typeInput.value === "") return;

  const newTask = new Task(nameInput.value, true, typeInput.value);
  tasks.push(newTask);

  nameInput.value = "";
  typeInput.value = "";

  closeTaskMenu();
  updateHTML();
}

function switchMode() { 

    let rnd = Math.random() * 10;

    if (rnd > 2) {
        alert("God Jul");
    } else {
        alert("Merry EVIL christmas, very BAD!!");
    }
}



function updateHTML() {
  // Oppdater status frå eksisterande checkboxar
  for (let task of tasks) {
    const oldBox = document.getElementById(task.getCheckBoxName());
    if (oldBox) {
      task.changeStatus(oldBox);
    }
  }

  // Fjern fullførte tasks
  tasks = tasks.filter(task => task.getStatus());

  const main = document.querySelector("main");
  main.innerHTML = "";

  for (let task of tasks) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskName = document.createElement("p");
    taskName.innerText = "Ønske: " + task.getName();

    const visitBtn = document.createElement("button");
    visitBtn.innerText = "Besøk meg!";

    visitBtn.addEventListener("click", () => {
      let url = task.getType();
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }
      window.open(url, "_blank");
    });

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = task.getCheckBoxName();
    checkBox.checked = false;

    checkBox.addEventListener("change", () => {
      task.changeStatus(checkBox);
    });

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(visitBtn);
    taskDiv.appendChild(checkBox);

    main.appendChild(taskDiv);
  }
}
