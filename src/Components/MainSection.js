import { Switch } from "@mui/material";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import "./MainSection.css";

export const MainSection = () => {
  const [task, setTask] = useState({
    taskName: "",
    taskDate: "",
    taskDesc: "",
    taskTime: "",
  });
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prevState) => !prevState);
    console.log(toggle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("tasks", JSON.stringify(task));
    console.log(task);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const styles = {
    backgroundColor: toggle ? "#1E2220" : "whitesmoke",
    height: "100vh",
  };
  return (
    <div style={styles} className="form-holder">
      <div>
        <Switch onClick={handleClick} />
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            name="taskName"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Name of the task"
          />
        </div>

        <div>
          <input
            name="taskDate"
            onChange={handleChange}
            className="input"
            type="date"
            placeholder="Date of the task"
          />
        </div>

        <div>
          <textarea
            name="taskDesc"
            onChange={handleChange}
            className="input"
            placeholder="Description of task"
          ></textarea>
        </div>

        <div>
          <input
            name="taskTime"
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Time of the task"
          />
        </div>

        <button type="submit" className="input">
          SAVE
        </button>
      </form>
    </div>
  );
};
