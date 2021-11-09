import React from 'react'
import { useGlobalContext } from '../context'
export default function Home() {  
  const { color,setColor } = useGlobalContext()
  const {items} =useGlobalContext()

  const handleClick=(e)=>{
    e.preventDefault();
    e.target.style.backgroundColor='purple'
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
    <section>
      <div>
        <button style={{background:color}} className="home-page" type="submit" onClick={handleClick}>20HZ</button>
      </div>
    </section>
    </>
  )
}
