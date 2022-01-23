import "./Modal.css"
import { Exit } from "../../icons";

export const Modal = ({ handleClose, title, children }) => (
  <>
    <div className="modal-layer" onClick={handleClose} />
    <div className="modal">
      <button className="exit" onClick={handleClose}>
        <Exit />
      </button>
      <div className="modal-content">
        <div className="header-message">{title}</div>
        <div className="divider" />
        {children}
      </div>
    </div>
  </>
);
