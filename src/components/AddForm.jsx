import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const AddForm = ({ onSubmit }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task = {}, mode = "add" } = location.state || {};
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [status, setStatus] = useState(task.status || "Pending");
  const statusList = ["Pending", "In Progress", "Completed"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      title,
      description,
      status,
      date: task.date,
    };
    onSubmit(updatedTask);
    navigate("/");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="data-input"
            placeholder="Enter The Title"
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="data-input"
            placeholder="Enter The Description"
          ></textarea>
        </div>
        {mode === "edit" && (
          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="data-input"
            >
              {statusList.map((user) => {
                return <option value={user}>{user}</option>;
              })}
            </select>
          </div>
        )}
        <div className="form-actions m-top-20">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="button-secondary"
          >
            Cancel
          </button>
          <button type="submit" className="button-primary">
            {mode === "add" ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
