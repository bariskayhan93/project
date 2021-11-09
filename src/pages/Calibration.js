import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
export default function Calibration() {
  const { items } = useGlobalContext();

  return (
    <section className="calibration-page section">
      <div className="calibration-container">
        <button className="btn btn-primary btn-calibration">Calibration</button>
        
        <section>
        {items.map((item) => {
      const { instructions } = item;
      
      return (
        <p className="section-title">{instructions}</p>
      )})}
        </section>
      </div>
    </section>
  );
}
