import React from 'react'
import { useGlobalContext } from '../context'
export default function Home() {  
  const { color,setColor } = useGlobalContext()
  

  const handleClick=(e)=>{
    e.preventDefault();
    e.target.style.backgroundColor='green'
    }
  

  return (
    <>
    <div>
      <h2 className="settings-section-title">Motor Speed</h2>
    </div>
    <section className="error-page section">
      <div>
        <button style={{background:color}} className="btn-settings home" type="submit" onClick={handleClick}>20HZ</button>
        <button style={{background:color}} className="btn-settings home" type="submit" onClick={handleClick}>40HZ</button>
      </div>
      <div>
      <button style={{background:color}} className="btn-settings home" type="submit" onClick={handleClick}>60HZ</button>
      <button style={{background:color}} className="btn-settings home" type="submit" onClick={handleClick}>80HZ</button>

      </div>
      <div>
      <button style={{background:color}} className="btn-settings home" type="submit" onClick={handleClick}>60HZ</button>
      <button style={{background:color}} className="btn-settings home" type="submit" onClick={handleClick}>80HZ</button>

      </div>
      
    </section>
    </>
  )
}
