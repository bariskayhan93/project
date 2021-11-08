import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useGlobalContext } from '../context';

export default function Settings() {
  const {  openModal } = useGlobalContext();

  return (
    
    <>
    <div>
      <h2 className="settings-section-title">Motor Speed</h2>
    </div>
    <section className="error-page section">
      <div>
        <button className="btn-settings set" onClick={openModal}>20HZ</button>
        <button className="btn-settings set"onClick={openModal}>40HZ</button>
      </div>
      <div>
        <button className="btn-settings set"onClick={openModal}>60HZ</button>
        <button className="btn-settings set"onClick={openModal}>80HZ</button>

      </div>
      <Modal />
    </section>
    </>
  );
}
