const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;
const DATA_FILE = "tasks.json";

// ✅ Allow requests from the correct frontend origin (Vite default: 5173)
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON
app.use(express.json());

// Load tasks from file
const loadTasks = () => {
  return fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"))
    : [];
};

// Save tasks to file
const saveTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// GET all tasks
app.get("/tasks", (req, res) => {
  const tasks = loadTasks();
  res.json(tasks);
});

// POST a new task
app.post("/tasks", (req, res) => {
  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  res.json(newTask);
});

// TOGGLE task completion
app.put("/tasks/:id", (req, res) => {
  let tasks = loadTasks();
  tasks = tasks.map((task) =>
    task.id == req.params.id
      ? { ...task, completed: !task.completed }
      : task
  );
  saveTasks(tasks);
  res.json({ success: true });
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
  let tasks = loadTasks();
  tasks = tasks.filter((task) => task.id != req.params.id);
  saveTasks(tasks);
  res.json({ success: true });
});


app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
