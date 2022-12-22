import React from 'react'
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <header className='d-flex justify-content-between'>
      <Link to="/"><h1><span>Weight</span>win</h1></Link>
      <navbar>
        <ul className='d-flex gap-5 mx-2'>
          <li><Link className='nav-item' to="/">Home</Link></li>
          <li><Link className='nav-item' to="/">Blog</Link></li>
          <li><Link className='nav-item' to="/">Contact</Link></li>
        </ul>
      </navbar>
    </header>
  )
}

export default Header