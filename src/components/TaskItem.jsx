const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <>
      <div className="task-details">
        <strong className="task-title">{task.title}</strong>
        <span
          className={`status-dot ${task.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {task.status}
        </span>
      </div>

      <span className="task-description">{task.description}</span>
      <div className="task-actions">
        <span className="task-date">
          {new Intl.DateTimeFormat("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(new Date(task?.date))}
        </span>
        <span className="action-buttons">
          <button className="edit-btn" onClick={() => onEdit(task)}>
            ✎
          </button>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            🗑
          </button>
        </span>
      </div>
    </>
  );
};

export default TaskItem;
