import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react'
import NavbarToggler from './NavbarToggler'

const Header = ({restToHomePage}) => {


  const [activeLink, setActiveLink] = useState('home')

  const handleActiveLink = (activeLink) =>{
    setActiveLink(activeLink)
  }
  
  const handleHomeClick = ()=>{
    restToHomePage()
  }



  return (
    <header className='d-flex justify-content-between align-items-center'>
      
      <NavbarToggler />
      <div>
      <Link onClick={()=>{handleActiveLink('home');handleHomeClick()}} className={activeLink==='home' ? 'nav-item active' : 'nav-item'} to="/"><h1><span>Weight</span>win</h1></Link>
      </div>
        <ul className='d-md-flex gap-5 mx-2'>
          <li><Link onClick={()=>{handleActiveLink('home')}} className={activeLink==='home' ? 'nav-item active' : 'nav-item'} to="/">Home</Link></li>
          <li><Link onClick={()=>{handleActiveLink('blog')}} className={activeLink==='blog' ? 'nav-item active' : 'nav-item'} to="/blog">Blog</Link></li>
          <li><Link onClick={()=>{handleActiveLink('contact')}} className={activeLink==='contact' ? 'nav-item active' : 'nav-item'} to="/contact">Contact</Link></li>
        </ul>
    </header>
  )
}

export default Header