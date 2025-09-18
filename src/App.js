import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FloatingButton from "./components/FloatingButton";
import AddForm from "./components/AddForm";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Complete Project Proposal",
      description:
        "Draft and finalize the project proposal for the new client.",
      status: "In Progress",
      date: new Date("2025-09-15").getTime(),
    },
    {
      id: 2,
      title: "Team Meeting",
      description:
        "Discuss the project timeline and assign tasks to team members.",
      status: "Pending",
      date: new Date("2025-09-18").getTime(),
    },
    {
      id: 3,
      title: "Submit Budget Report",
      description: "Prepare and submit the budget report for Q3.",
      status: "Completed",
      date: new Date("2025-09-10").getTime(),
    },
    {
      id: 4,
      title: "Client Feedback Review",
      description:
        "Review the feedback received from the client and make necessary adjustments.",
      status: "In Progress",
      date: new Date("2025-09-17").getTime(),
    },
    {
      id: 5,
      title: "Update Website Content",
      description: "Revise and update the content on the company website.",
      status: "Pending",
      date: new Date("2025-09-20").getTime(),
    },
    {
      id: 6,
      title: "Prepare Presentation",
      description:
        "Create a presentation for the upcoming stakeholder meeting.",
      status: "Completed",
      date: new Date("2025-09-12").getTime(),
    },
  ]);
  const [mode, setMode] = useState("add");

  const updateToDoList = (newTask) => {
    if (newTask.id) {
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTask(updatedTasks);
      return;
    } else {
      const newTaskWithId = {
        ...newTask,
        date: Date.now(),
        id: Math.random(),
        status: "Pending",
      };
      setTask([...tasks, newTaskWithId]);
    }
  };

  const deleteFromToDoList = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTask(filteredTasks);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header title={"To-Do App"} />
              <ToDoList
                tasks={tasks}
                onDelete={(id) => deleteFromToDoList(id)}
                setMode={setMode}
              />
              <FloatingButton />
            </>
          }
        />
        <Route
          path="/add"
          element={
            <>
              <Header
                title={mode === "add" ? "Add Task" : "Edit Task"}
                navigateToHome={true}
              />
              <AddForm mode="add" onSubmit={(task) => updateToDoList(task)} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
