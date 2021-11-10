import React from "react";
import { FaTimes } from "react-icons/fa";
import { ReactDOM } from "react";
import { useGlobalContext } from "../context";


const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
    >
      <div className='modal-container danger'>
        <h3>Reboot</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes/>
        </button>
      </div>
    </div>
  );
};

export default Modal;
