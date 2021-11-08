import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='react logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/troubleshooting'>troubleshooting</Link>
          </li>
          <li>
            <Link to='/settings'>settings</Link>
          </li>
          <li>
            <Link to='/data'>data</Link>
          </li>
          <li>
            <Link to='/calibration'>calibration</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}
