import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
export default function Calibration() {
  const { items } = useGlobalContext();

  return (
    <section className="calibration-page section">
      <div className="calibration-container">
        <button className="btn btn-primary btn-calibration">Calibration</button>
        
        <section className="calibration-instructions">
        {items.map((item) => {
      const { instructions } = item;
      
      return (
        <section className="section about-section">
        <p>{instructions}</p>
        </section>
      )})}
        </section>
      </div>
    </section>
  );
}
