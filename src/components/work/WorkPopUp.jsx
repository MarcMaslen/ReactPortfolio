import React from "react";
import "./workpopup.scss";
import ReactDom from "react-dom";


function WorkPopUp({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}



export default WorkPopUp;
