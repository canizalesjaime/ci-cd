import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [schedule, setSchedule] = useState([]);
  const [todos, setTodos] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  useEffect(() => {
    fetchSchedule();
    fetchTodos();
  }, []);

  const fetchSchedule = async () => {
    const response = await axios.get("http://localhost:3000/api/schedule");
    setSchedule(response.data);
  };

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3000/api/todos");
    setTodos(response.data);
  };

  const addEvent = async () => {
    await axios.post("http://localhost:3000/api/schedule", { event: newEvent });
    fetchSchedule();
  };

  const addTask = async () => {
    await axios.post("http://localhost:3000/api/todos", {
      task: newTask,
      dueDate: newDueDate,
    });
    fetchTodos();
  };

  const deleteTask = async (task) => {
    await axios.delete(`http://localhost:3000/api/todos/${task}`);
    fetchTodos();
  };

  return (
    <div className="App">
      <h1>Weekly Schedule</h1>
      <input
        type="text"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
        placeholder="Add new event"
      />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>
            {item.day} - {item.time}: {item.event}
          </li>
        ))}
      </ul>

      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <input
        type="date"
        value={newDueDate}
        onChange={(e) => setNewDueDate(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.task} - Due: {item.due_date}{" "}
            <button onClick={() => deleteTask(item.task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
