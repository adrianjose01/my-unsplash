import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 100,
  borderRadius: "0.5rem",
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0, 0.7)",
  zIndex: 100,
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE} onClick={onClose} />
      <div style={MODAL_STYLES}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
