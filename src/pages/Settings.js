import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Danger_modal from "../components/Danger_modal";
import { useGlobalContext } from '../context';

export default function Settings() {
  const {  openModal,items } = useGlobalContext();

  return (
    
    <>
   {/*motor speed*/}
   <div>  
    {items.map((item) => {
      const { name, id, info, glass, image } = item;
      if(id<11150)
      return (
        <h2 className="section-title">{id}</h2>
      )})}
    </div>

    <section className="settings-page">
      <div className="settings-container">
        <button className="btn-settings set" onClick={openModal}>20HZ</button>
  
        <button className="btn-settings set"onClick={openModal}>40HZ</button>

        <button className="btn-settings set"onClick={openModal}>60HZ</button>

        <button className="btn-settings set"onClick={openModal}>80HZ</button>

      </div>
      <Danger_modal />
    </section>
    </>
  );
}
