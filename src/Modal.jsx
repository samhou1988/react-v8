import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    let modalRoot = document.getElementById("modal");
    // check if modalRoot exists
    if (!modalRoot) {
      // create a div with the id of modal in the document body
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "modal");
      document.body.appendChild(modalRoot);
    }
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
