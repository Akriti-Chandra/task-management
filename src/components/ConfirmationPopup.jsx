const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="confirmation-popup">
        <p>{message}</p>
        <div className="popup-buttons">
          <button className="button-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="button-primary" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
