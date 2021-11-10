import React from 'react'
import { useGlobalContext } from '../context'
import Danger_modal from "../components/Danger_modal";
export default function Home() {  
  const { color,setColor, openModal,items } = useGlobalContext()

  const handleClick=(e)=>{
    e.preventDefault();
    e.target.style.backgroundColor='purple'
    openModal()
    }

  return (
    <>
    <div>  
    {items.map((item) => {
      const { id } = item;
      if(id<11150)
      return (
        <h2 className="section-title">{id}</h2>
      )})}
    </div>
      <div className="section-title">
        <button style={{background:color}} className="home-page" type="submit" onClick={handleClick}>20HZ</button>
      </div>
      <Danger_modal />
    </>
  )
}
