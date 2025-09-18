import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationPopup from "./ConfirmationPopup";
import TaskItem from "./TaskItem";
const ToDoList = (props) => {
  const [openSection, setOpenSection] = useState("In Progress");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const groupedTasks = {
    "In Progress": props?.tasks?.filter(
      (task) => task.status === "In Progress"
    ),
    Pending: props?.tasks?.filter((task) => task.status === "Pending"),
    Completed: props?.tasks?.filter((task) => task.status === "Completed"),
  };

  const handleEdit = (task) => {
    props.setMode("edit");
    navigate("/add", { state: { task, mode: "edit" } });
  };

  const handleDelete = (taskId) => {
    setTaskToDelete(taskId);
    setIsPopupVisible(true);
    setPopupMessage("Are you sure you want to delete this record?");
  };

  const onDeleteConfirm = () => {
    props.onDelete(taskToDelete);
    setIsPopupVisible(false);
    setTaskToDelete(null);
  };

  const onDeleteCancel = () => {
    setIsPopupVisible(false);
    setTaskToDelete(null);
  };

  return (
    <div>
      {Object.keys(groupedTasks).map((status) => (
        <div key={status}>
          <div className="section-header" onClick={() => toggleSection(status)}>
            <span>
              {status} ({groupedTasks[status].length}){" "}
            </span>
          </div>
          {openSection === status && (
            <div>
              {groupedTasks[status].length > 0 ? (
                <ul className="task-list">
                  {groupedTasks[status].map((task) => (
                    <li key={task.id} className="task-container">
                      <TaskItem
                        task={task}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No tasks available.</p>
              )}
            </div>
          )}
        </div>
      ))}
      {isPopupVisible && (
        <ConfirmationPopup
          message={popupMessage}
          onConfirm={() => onDeleteConfirm()}
          onCancel={() => onDeleteCancel()}
        />
      )}
    </div>
  );
};

export default ToDoList;
