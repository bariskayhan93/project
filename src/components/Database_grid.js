import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function Database() {
  const { items, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (items.length < 1) {
    return (
      <h2 className="section-title">no item matched your search criteria</h2>
    );
  }
  return (
    <div class="list">
  <ul>
    <li className="hidden-mobile">Image</li>
    <li>Name</li>
    <li>Glas</li>
    <li>Info</li>
    <li>Link</li>
    <li>Description</li>
  </ul>

  {items.map((item) => {
          const { name, id, info, glass, image } = item;
          return (
            <ul className="table-middle">
            <li data-label="image" className="grid-image hidden-mobile "><img src={image} alt={name} /></li>
            <li data-label="name">{name}</li>
            <li data-label="glass">{glass}</li>
            <li data-label="info">{info}</li>
            <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
                  details
                </Link>
            <li data-label="description">
              <p>Example of a responsive list/table on Codepen.</p>
            </li>
          </ul>
   
          );
        })}

  
</div>
  );
}
