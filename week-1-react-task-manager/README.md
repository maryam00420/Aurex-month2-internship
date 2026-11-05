# React Task Manager (Week 1)

A component-driven task manager built with React and Vite, rebuilt from my Month 1 JavaScript Task Manager. This project is part of the AUREX Full-Stack Internship (Month 2, Week 1).

## Live Demo
https://week-1-react-task-manager-three.vercel.app

## Project Summary
This app lets users add tasks, mark them complete, delete them and filter them by status. It is built with a clean component hierarchy and uses React state with props to pass data and functions between components. Tasks are saved in the browser, so they remain after a refresh.

## Features
- Add tasks using a controlled form input
- Display tasks dynamically using list mapping with unique keys
- Mark tasks as complete by clicking the task text
- Delete tasks from the list
- Input validation: empty tasks are not allowed
- Live counter of completed tasks
- Filter tasks by All, Active and Completed
- Tasks saved in localStorage

## Component Structure
```
App
├── Header
├── TaskForm
├── TaskFilter
└── TaskList
    └── TaskItem
```

- **App**: holds the `tasks` and `filter` state, and the add, toggle and delete functions
- **Header**: shows the title and completed task count
- **TaskForm**: controlled input with validation, sends new tasks to App via `onAdd`
- **TaskFilter**: shows the All, Active and Completed buttons and sends the chosen filter to App via `onChange`
- **TaskList**: maps through the tasks array and renders a `TaskItem` for each
- **TaskItem**: shows one task with complete and delete actions

## Technologies Used
- React.js (functional components, hooks)
- Vite
- CSS
- Git and GitHub
- Vercel (deployment)

## Setup
1. Clone the repository
   ```
   git clone https://github.com/maryam00420/week-1-react-task-manager.git
   ```
2. Go into the folder
   ```
   cd week-1-react-task-manager
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the development server
   ```
   npm run dev
   ```
5. Open http://localhost:5173 in your browser

## What I Learned
- JSX syntax and reusable functional components
- Passing data down with props and functions up for child-to-parent communication
- Lifting state up to the App component
- Managing UI state with useState and saving data with useEffect
- Handling events: onClick, onChange, onSubmit
- Controlled form inputs and basic validation
- Rendering lists with key props and conditional rendering
- Deploying a Vite app on Vercel

## Blockers / Issues
- Clicking a task twice quickly selected the text instead of toggling it. Fixed using `user-select: none`.
- Running `npm install` in the Month 1 folder failed because it had no `package.json`. Created a new Vite project instead.

## Screenshots
![Task Manager](screenshots/app.png)

## Author
Maryam | AUREX Full-Stack Internship