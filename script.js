/* =====================================================
   TASKFLOW
   Intermediate ShadowFox Project
   ===================================================== */


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");

const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");
const progressPercent = document.getElementById("progressPercent");

const addTaskButton = document.getElementById("addTaskButton");

const taskModal = document.getElementById("taskModal");
const modalOverlay = document.getElementById("modalOverlay");

const closeModal = document.getElementById("closeModal");
const cancelButton = document.getElementById("cancelButton");

const taskForm = document.getElementById("taskForm");

const taskId = document.getElementById("taskId");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDate = document.getElementById("taskDate");

const modalTitle = document.getElementById("modalTitle");

const searchInput = document.getElementById("searchInput");
const priorityFilter = document.getElementById("priorityFilter");

const themeToggle = document.getElementById("themeToggle");

const navItems = document.querySelectorAll(".nav-item");


/* =====================================================
   APPLICATION STATE
   ===================================================== */

let tasks = JSON.parse(
    localStorage.getItem("taskflow_tasks")
) || [];

let currentFilter = "all";


/* =====================================================
   INITIALIZATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    renderTasks();

});


/* =====================================================
   LOCAL STORAGE
   ===================================================== */

function saveTasks() {

    localStorage.setItem(
        "taskflow_tasks",
        JSON.stringify(tasks)
    );

}


/* =====================================================
   RENDER TASKS
   ===================================================== */

function renderTasks() {

    const filteredTasks = getFilteredTasks();

    taskList.innerHTML = "";

    if (filteredTasks.length === 0) {

        emptyState.classList.remove("hidden");

    } else {

        emptyState.classList.add("hidden");

        filteredTasks.forEach(task => {

            const taskElement = createTaskElement(task);

            taskList.appendChild(taskElement);

        });

    }

    updateStatistics();

}


/* =====================================================
   FILTER LOGIC
   ===================================================== */

function getFilteredTasks() {

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    const selectedPriority =
        priorityFilter.value;


    return tasks.filter(task => {

        const matchesSearch =
            task.title.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm);


        const matchesPriority =
            selectedPriority === "all" ||
            task.priority === selectedPriority;


        let matchesStatus = true;


        if (currentFilter === "pending") {

            matchesStatus = !task.completed;

        }


        if (currentFilter === "completed") {

            matchesStatus = task.completed;

        }


        return (
            matchesSearch &&
            matchesPriority &&
            matchesStatus
        );

    });

}


/* =====================================================
   CREATE TASK ELEMENT
   ===================================================== */

function createTaskElement(task) {

    const article = document.createElement("article");

    article.className = "task-card";

    if (task.completed) {

        article.classList.add("completed");

    }


    const formattedDate =
        formatDate(task.dueDate);


    article.innerHTML = `

        <div class="task-main">

            <button
                class="check-button"
                data-action="toggle"
                data-id="${task.id}"
                aria-label="Toggle task completion"
            >
                ${task.completed ? "✓" : ""}
            </button>


            <div class="task-content">

                <div class="task-title">
                    ${escapeHTML(task.title)}
                </div>

                <div class="task-description">
                    ${escapeHTML(task.description || "No description added.")}
                </div>


                <div class="task-meta">

                    <span class="badge ${task.priority}">
                        ${task.priority}
                    </span>

                    ${
                        formattedDate
                            ? `<span class="due-date">
                                Due ${formattedDate}
                               </span>`
                            : ""
                    }

                </div>

            </div>

        </div>


        <div class="task-actions">

            <button
                class="icon-button"
                data-action="edit"
                data-id="${task.id}"
                aria-label="Edit task"
            >
                ✎
            </button>

            <button
                class="icon-button delete"
                data-action="delete"
                data-id="${task.id}"
                aria-label="Delete task"
            >
                ×
            </button>

        </div>

    `;


    return article;

}


/* =====================================================
   TASK ACTIONS
   ===================================================== */

taskList.addEventListener("click", event => {

    const button =
        event.target.closest("[data-action]");


    if (!button) return;


    const action = button.dataset.action;

    const id = button.dataset.id;


    if (action === "toggle") {

        toggleTask(id);

    }


    if (action === "edit") {

        editTask(id);

    }


    if (action === "delete") {

        deleteTask(id);

    }

});


/* =====================================================
   TOGGLE TASK
   ===================================================== */

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;

    });


    saveTasks();

    renderTasks();

}


/* =====================================================
   DELETE TASK
   ===================================================== */

function deleteTask(id) {

    const confirmed =
        confirm("Delete this task?");


    if (!confirmed) return;


    tasks = tasks.filter(
        task => task.id !== id
    );


    saveTasks();

    renderTasks();

}


/* =====================================================
   OPEN MODAL
   ===================================================== */

function openModal(task = null) {

    taskModal.classList.remove("hidden");


    if (task) {

        modalTitle.textContent = "Edit Task";

        taskId.value = task.id;

        taskTitle.value = task.title;

        taskDescription.value =
            task.description;

        taskPriority.value =
            task.priority;

        taskDate.value =
            task.dueDate || "";

    } else {

        modalTitle.textContent = "Create Task";

        taskForm.reset();

        taskId.value = "";

        taskPriority.value = "medium";

    }


    setTimeout(() => {

        taskTitle.focus();

    }, 100);

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closeTaskModal() {

    taskModal.classList.add("hidden");

    taskForm.reset();

    taskId.value = "";

}


/* =====================================================
   ADD TASK
   ===================================================== */

addTaskButton.addEventListener("click", () => {

    openModal();

});


/* =====================================================
   EDIT TASK
   ===================================================== */

function editTask(id) {

    const task =
        tasks.find(task => task.id === id);


    if (!task) return;


    openModal(task);

}


/* =====================================================
   FORM SUBMISSION
   ===================================================== */

taskForm.addEventListener("submit", event => {

    event.preventDefault();


    const title =
        taskTitle.value.trim();

    const description =
        taskDescription.value.trim();

    const priority =
        taskPriority.value;

    const dueDate =
        taskDate.value;


    if (!title) {

        alert("Please enter a task title.");

        return;

    }


    if (taskId.value) {

        tasks = tasks.map(task => {

            if (task.id === taskId.value) {

                return {
                    ...task,
                    title,
                    description,
                    priority,
                    dueDate
                };

            }

            return task;

        });

    } else {

        const newTask = {

            id: Date.now().toString(),

            title,

            description,

            priority,

            dueDate,

            completed: false,

            createdAt:
                new Date().toISOString()

        };


        tasks.unshift(newTask);

    }


    saveTasks();

    renderTasks();

    closeTaskModal();

});


/* =====================================================
   MODAL EVENTS
   ===================================================== */

closeModal.addEventListener(
    "click",
    closeTaskModal
);


cancelButton.addEventListener(
    "click",
    closeTaskModal
);


modalOverlay.addEventListener(
    "click",
    closeTaskModal
);


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        !taskModal.classList.contains("hidden")
    ) {

        closeTaskModal();

    }

});


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener(
    "input",
    renderTasks
);


/* =====================================================
   PRIORITY FILTER
   ===================================================== */

priorityFilter.addEventListener(
    "change",
    renderTasks
);


/* =====================================================
   STATUS FILTER
   ===================================================== */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav =>
            nav.classList.remove("active")
        );


        item.classList.add("active");


        currentFilter =
            item.dataset.filter;


        renderTasks();

    });

});


/* =====================================================
   STATISTICS
   ===================================================== */

function updateStatistics() {

    const total = tasks.length;


    const completed =
        tasks.filter(task => task.completed).length;


    const pending =
        total - completed;


    const progress =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);


    totalTasks.textContent = total;

    pendingTasks.textContent = pending;

    completedTasks.textContent = completed;

    progressPercent.textContent =
        `${progress}%`;

}


/* =====================================================
   DATE FORMATTER
   ===================================================== */

function formatDate(dateString) {

    if (!dateString) return "";


    const date =
        new Date(`${dateString}T00:00:00`);


    if (Number.isNaN(date.getTime())) {

        return "";

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   HTML SECURITY
   ===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement("div");


    div.textContent = value;


    return div.innerHTML;

}


/* =====================================================
   THEME
   ===================================================== */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "taskflow_theme",
        isDark ? "dark" : "light"
    );


    themeToggle.textContent =
        isDark ? "☀" : "☾";

});


function loadTheme() {

    const savedTheme =
        localStorage.getItem("taskflow_theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀";

    } else {

        themeToggle.textContent = "☾";

    }

}