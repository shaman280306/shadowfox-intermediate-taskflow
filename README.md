# 🚀 TaskFlow — Task Management Dashboard

A modern, responsive **task management dashboard** developed as part of the **ShadowFox Virtual Internship — Intermediate Project**.

TaskFlow provides a clean productivity workspace where users can create, manage, search, filter, complete, and track tasks through an intuitive dashboard interface.

---

## 🌐 Live Demo

🔗 **[View TaskFlow Live](https://shaman280306.github.io/shadowfox-intermediate-taskflow/)**

---

## 📌 Project Overview

TaskFlow is a frontend task management application designed to demonstrate practical JavaScript development and interactive UI implementation.

The dashboard provides users with:

- 📋 Task creation and management
- 🔎 Task searching
- 🎯 Priority-based filtering
- ✅ Task completion tracking
- 📊 Real-time task statistics
- 📈 Progress calculation
- 🌙 Dark/Light theme support
- 📱 Responsive interface
- 💾 Browser-based task persistence

The project focuses on building a practical productivity application using core web technologies without relying on a frontend framework.

---

## 🎯 Objective

The objective of this project is to build an interactive web application that demonstrates practical implementation of modern frontend concepts using:

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Event Handling
- Local Storage
- Responsive Web Design

The project converts these concepts into a functional task management experience rather than a static webpage.

---

## ✨ Key Features

### 📊 Productivity Dashboard

Displays real-time statistics including:

- Total Tasks
- Pending Tasks
- Completed Tasks
- Overall Progress

---

### ➕ Task Creation

Users can create new tasks with relevant task information and priority levels.

---

### 🔎 Search Tasks

Quickly search through existing tasks using the task search interface.

---

### 🎯 Priority Filtering

Tasks can be filtered according to their priority:

- All Priorities
- High
- Medium
- Low

---

### ✅ Task Completion

Users can mark tasks as completed and instantly see the dashboard statistics and progress update.

---

### 🗑️ Task Management

Tasks can be managed directly from the dashboard, keeping the workspace organized and easy to use.

---

### 🌙 Theme Toggle

TaskFlow includes a theme toggle for switching between light and dark visual modes.

---

### 💾 Local Storage

Task data is stored in the browser using **Local Storage**, allowing tasks to remain available after refreshing or reopening the page.

---

### 📱 Responsive Design

The interface is designed to adapt across different screen sizes, including:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling, layout and responsiveness |
| JavaScript | Application logic and interactivity |
| DOM API | Dynamic UI manipulation |
| Local Storage API | Persistent task data |
| Git & GitHub | Version control and deployment |
| GitHub Pages | Live hosting |

---

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates several important frontend JavaScript concepts:

- Variables and constants
- Arrays and objects
- Functions
- Arrow functions
- DOM selection and manipulation
- Event listeners
- Event handling
- Array methods
- Conditional logic
- Template literals
- Local Storage
- JSON parsing and stringification
- Dynamic HTML rendering
- State-based UI updates

---

## 🔄 Application Flow

```text
User
  │
  ▼
TaskFlow Dashboard
  │
  ├── Create Task
  │       │
  │       ▼
  │   Store Task
  │
  ├── Search Tasks
  │
  ├── Filter by Priority
  │
  ├── Mark Complete
  │
  └── Delete / Manage Task
          │
          ▼
    Update Application State
          │
          ▼
    Recalculate Statistics
          │
          ▼
       Update UI
          │
          ▼
     Local Storage
📊 Dashboard Metrics

TaskFlow dynamically calculates:

Total Tasks

The complete number of tasks currently stored.

Pending Tasks

Tasks that have not yet been completed.

Completed Tasks

Tasks marked as completed.

Progress

The completion percentage calculated from the current task state.

Progress = (Completed Tasks / Total Tasks) × 100
📂 Project Structure
shadowfox-intermediate-taskflow/
│
├── index.html
├── style.css
├── script.js
└── README.md
index.html

Contains the structure of the TaskFlow dashboard, navigation, task workspace, statistics cards, search controls, filters, and task interface.

style.css

Contains the complete visual design, responsive layouts, cards, navigation, buttons, forms, theme styles, and UI states.

script.js

Contains the application's core functionality including:

Task creation
Task rendering
Task searching
Priority filtering
Completion handling
Statistics calculation
Theme management
Local Storage operations
💾 Data Persistence

TaskFlow uses the browser's Local Storage API to persist task information.

This means users can refresh the webpage without immediately losing their task data.

The general storage flow is:

Task Created
     ↓
JavaScript State
     ↓
JSON.stringify()
     ↓
localStorage
     ↓
Page Reload
     ↓
localStorage.getItem()
     ↓
JSON.parse()
     ↓
Render Tasks
🎨 UI Design

The interface follows a modern productivity-dashboard design approach featuring:

Clean sidebar navigation
Dashboard statistics cards
Spacious workspace
Clear visual hierarchy
Priority indicators
Interactive controls
Responsive layouts
Light/Dark theme support

The design emphasizes usability, readability, and quick task interaction.

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/shaman280306/shadowfox-intermediate-taskflow.git
2. Navigate to the Project
cd shadowfox-intermediate-taskflow
3. Open the Application

Open:

index.html

in your browser.

No build tools, package manager, or backend server are required.

🌐 Deployment

The project is deployed using GitHub Pages.

Live Website

🔗 https://shaman280306.github.io/shadowfox-intermediate-taskflow/

🧪 Testing Checklist

The application can be tested using the following workflow:

 Open dashboard
 Create a task
 Assign task priority
 Search for a task
 Filter tasks
 Mark task as completed
 Verify statistics update
 Verify progress calculation
 Refresh browser
 Verify Local Storage persistence
 Switch between themes
 Test responsive layout
🎓 Internship Context

Program: ShadowFox Virtual Internship
Project Level: Intermediate
Project: TaskFlow — Task Management Dashboard

This project was developed to demonstrate the practical application of frontend development concepts through a functional, user-oriented web application.

👨‍💻 Developer
Shaman Sharma

Computer Science & Engineering | AI & Machine Learning

Interested in:

Artificial Intelligence
Machine Learning
Software Development
Web Development
Innovation & Product Building
📌 Repository

🔗 GitHub Repository

https://github.com/shaman280306/shadowfox-intermediate-taskflow

📄 License

This project is developed for educational and internship purposes.

⭐ If you find this project useful, consider giving the repository a star!
