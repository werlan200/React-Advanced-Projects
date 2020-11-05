import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, questions, correct, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal isOpen" : "modal"}>
      <div className="modal-cont">
        <h2>Congraculations!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className="btn" onClick={closeModal}>
          Play again!
        </button>
      </div>
    </div>
  );
};

export default Modal;
